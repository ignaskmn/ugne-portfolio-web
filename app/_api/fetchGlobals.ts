import type { Footer, Header, Cv } from "@/app/_types/payload-types";

const url = 'https://admin.ugnemakselyte.com';

export async function fetchHeader(): Promise<Header> {
  const header = await fetch(
    `${url}/api/globals/header?depth=1`
  ).then((res) => res.json()); // eslint-disable-line function-paren-newline

  return header;
}

export async function fetchFooter(): Promise<Footer> {
  const footer = await fetch(
    `${url}/api/globals/footer?depth=1`
  ).then((res) => res.json()); // eslint-disable-line function-paren-newline

  return footer;
}
