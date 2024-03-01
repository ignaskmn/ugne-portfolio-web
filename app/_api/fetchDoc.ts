import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

import type { Config } from "@/app/_types/payload-types";

export const fetchDoc = async <T>(args: {
  collection: keyof Config["collections"];
  slug?: string;
  id?: string;
  draft?: boolean;
}): Promise<T> => {
  const { collection, slug, draft } = args || {};

  let payloadToken: RequestCookie | undefined;

  if (draft) {
    const { cookies } = await import("next/headers");
    payloadToken = cookies().get("payload-token");
  }

  const doc: T = await fetch(
    `${
      process.env.NEXT_PUBLIC_PAYLOAD_URL
    }/api/${collection}?where[slug][equals]=${slug}${
      draft && payloadToken ? "&draft=true" : ""
    }`,
    {
      method: "GET",
      // this is the key we'll use to on-demand revalidate pages that use this data
      // we do this by calling `revalidateTag()` using the same key
      // see `app/api/revalidate.ts` for more info
      next: { tags: [`pages_${slug}`] },
      ...(draft && payloadToken
        ? {
            headers: {
              Authorization: `JWT ${payloadToken?.value}`,
            },
          }
        : {}),
    }
  )
    .then((res) => res.json())
    ?.then((res) => {
      if (res.errors)
        throw new Error(res?.errors?.[0]?.message ?? "Error fetching doc");
      return res?.docs?.[0];
    });

  return doc;
};