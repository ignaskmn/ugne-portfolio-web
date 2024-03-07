import React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { Work } from "@/app/_types/payload-types";
import { fetchDoc } from "@/app/_api/fetchDoc";
import { fetchDocs } from "@/app/_api/fetchDocs";
import { Blocks } from "@/app/_components/Blocks";
import { HeroWork } from "@/app/_heros/Work";
import { generateMeta } from "@/app/_utilities/generateMeta";

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { isEnabled: isDraftMode } = draftMode();

  let work: Work | null = null;

  try {
    work = await fetchDoc<Work>({
      collection: "works",
      slug,
      draft: isDraftMode,
    });
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }

  if (!work) {
    notFound();
  }

  const { blocks } = work;

  return (
    <div className="flex flex-col items-center mb-16">
      <div className="max-w-4xl">
        <HeroWork {...work} />
        <Blocks blocks={blocks} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const works = await fetchDocs<Work>("works");
    return works?.map(({ slug }) => slug);
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode();

  let post: Work | null = null;

  try {
    post = await fetchDoc<Work>({
      collection: "works",
      slug,
      draft: isDraftMode,
    });
  } catch (error) {}

  return generateMeta({ doc: post });
}
