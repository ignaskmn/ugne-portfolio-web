import type { Config } from "@/app/_types/payload-types";

const url = process.env.NEXT_PUBLIC_PAYLOAD_URL;

export const fetchDocs = async <T>(
  collection: keyof Config["collections"],
  dyn: string,
): Promise<T[]> => {
  const docs: {
    docs: T[];
  } = await fetch(`${url}/api/${collection}?depth=1&limit=100`).then((res) =>
    res.json(),
  ); // eslint-disable-line function-paren-newline

  return docs?.docs ?? [];
};
