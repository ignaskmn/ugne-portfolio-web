import React, { type JSX } from "react";
import Article from "@/app/_components/RichText/Article";
import { Page } from "@/app/_types/payload-types";

// destructure textblock props in a new reaction functional component
export function TextBlock(
  props: Extract<Page["blocks"], { blockType: "textBlock" }>
): JSX.Element {
  const { richText } = props;
  return <Article content={richText} />;
}
