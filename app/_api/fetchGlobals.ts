import type { Footer, Header, Cv } from "@/app/_types/payload-types";

export async function fetchHeader(): Promise<Header> {
  const header = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/header?depth=1`
  ).then((res) => res.json()); // eslint-disable-line function-paren-newline

  return header;
}

export async function fetchFooter(): Promise<Footer> {
  const footer = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/footer?depth=1`
  ).then((res) => res.json()); // eslint-disable-line function-paren-newline

  return footer;
}
