import type { Config } from "@/app/_types/payload-types";

export const fetchDocs = async <T>(
  collection: keyof Config["collections"]
): Promise<T[]> => {
  const docs: {
    docs: T[];
  } = await fetch(
    `${process.env.PAYLOAD_URL}/api/${collection}?depth=0&limit=100`
  ).then((res) => res.json()); // eslint-disable-line function-paren-newline

  return docs?.docs ?? [];
};
