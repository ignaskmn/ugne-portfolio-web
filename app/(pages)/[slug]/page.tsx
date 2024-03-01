import React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import type { Page } from "@/app/_types/payload-types";
import { fetchDoc } from "@/app/_api/fetchDoc";
import { fetchDocs } from "@/app/_api/fetchDocs";
import { generateMeta } from "@/app/_utilities/generateMeta";
// import { Blocks } from '../../_components/Blocks'
import { Hero } from "@/app/_components/Hero";

export default async function Page({ params: { slug = "home" } }) {
  // const { isEnabled: isDraftMode } = draftMode();

  // let page: Page | null = null;

  // try {
  //   page = await fetchDoc<Page>({
  //     collection: "pages",
  //     slug,
  //     draft: isDraftMode,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  // if (!page) {
  //   return notFound();
  // }

  // const { hero, layout } = page;
  // const { hero } = page;

  const hero: {
    type: "none" | "home" | "default";
    text?: string | null;
    subtext?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    description?:
      | {
          [k: string]: unknown;
        }[]
      | null;
  } = {
    type: "home",
    text: "ugnė makselytė",
    subtext: [
      {
        children: [
          {
            text: "portfolio",
          },
        ],
        type: "h2",
      },
    ],
    description: [
      {
        children: [
          {
            text: "This page is intended to reflect my creative work in the areas of experimental music composition, sound art & design and field recordings: – Ugnė (Davai Bėgam)",
          },
        ],
      },
    ],
  };
  return (
    <React.Fragment>
      {/* <Hero {...hero} />
    <Blocks
      blocks={layout}
      disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
    /> */}
      <div className="mx-4 md:mx-24">
        <div className="mb-16 md:my-24">
          <Hero {...hero} />
        </div>
      </div>
    </React.Fragment>
  );
}

// export async function generateStaticParams() {
//   const pages = await fetchDocs<Page>("pages");

//   return pages.map(({ slug }) =>
//     slug !== "home"
//       ? {
//           slug,
//         }
//       : {}
//   ); // eslint-disable-line function-paren-newline
// }

// export async function generateMetadata({
//   params: { slug = "home" },
// }): Promise<Metadata> {
//   const { isEnabled: isDraftMode } = draftMode();

//   let page: Page | null = null;

//   try {
//     page = await fetchDoc<Page>({
//       collection: "pages",
//       slug,
//       draft: isDraftMode,
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   return generateMeta({ doc: page });
// }
