import type { Metadata } from "next";

import type { Page, Work } from "@/app/_types/payload-types";
import { mergeOpenGraph } from "./mergeOpenGraph";

const url =
  process.env.NODE_ENV === "production"
    ? "https://admin.ugnemakselyte.com"
    : "http://localhost:3000";

export const generateMeta = async (args: {
  doc: Page | Work | null;
}): Promise<Metadata> => {
  const { doc } = args || {};

  const ogImage =
    typeof doc?.meta?.image === "object" &&
    doc?.meta?.image !== null &&
    "url" in doc?.meta?.image &&
    `${url}${doc.meta.image.url}`;

  return {
    title: doc?.meta?.title || "Payload",
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      title: doc?.meta?.title || "Payload",
      description: doc?.meta?.description ?? "",
      url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  };
};
