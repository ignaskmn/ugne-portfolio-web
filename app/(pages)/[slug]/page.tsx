import React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import type { Page } from "@/app/_types/payload-types";
import { fetchDoc } from "@/app/_api/fetchDoc";
import { fetchDocs } from "@/app/_api/fetchDocs";
import { generateMeta } from "@/app/_utilities/generateMeta";
import { Blocks } from "@/app/_components/Blocks";
import { Hero } from "@/app/_components/Hero";
import Cv from "@/app/_cv/Cv";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const { slug = "home" } = params;

  const { isEnabled: isDraftMode } = await draftMode();

  if (slug === "cv") {
    return Cv();
  }

  let page: Page | null = null;

  try {
    page = await fetchDoc<Page>({
      collection: "pages",
      slug,
      draft: isDraftMode,
    });
  } catch (error) {
    console.log(error);
  }

  if (!page) {
    return notFound();
  }

  const { hero, blocks } = page;
  // const { hero } = page;

  return (
    <React.Fragment>
      {/* <Hero {...hero} />
    <Blocks
      blocks={layout}
      disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
    /> */}

      <div className="mx-4 md:mx-24">
        <div className="flex flex-col mb-16">
          <Hero {...hero} />
          <Blocks blocks={blocks} />
        </div>
      </div>
    </React.Fragment>
  );
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>("pages");
    return pages?.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { slug = "home" } = params;

  const { isEnabled: isDraftMode } = await draftMode();

  let page: Page | null = null;

  try {
    page = await fetchDoc<Page>({
      collection: "pages",
      slug,
      draft: isDraftMode,
    });
  } catch (error) {
    console.log(error);
  }

  return generateMeta({ doc: page });
}
