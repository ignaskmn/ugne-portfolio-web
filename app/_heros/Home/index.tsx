import React from "react";

import { Page } from "@/app/_types/payload-types";
import RichText from "@/app/_components/RichText";

export const HeroHome: React.FC<Page["hero"]> = ({
  text,
  subtext,
  description,
}) => {
  return (
    <>
      {(text || subtext) && (
        <div className="mt-8 pl-4 pr-8 sm:pl-12 sm:pr-24 py-8 sm:py-16 border border-1 border-stone-400 mb-8 md:mb-8">
          {text && <h1 className="text-4xl sm:text-5xl">{text}</h1>}
          {subtext && <RichText content={subtext} />}
        </div>
      )}
      {description && (
        <div className="p-4 border border-1 border-stone-400 inline-block max-w-xs sm:max-w-md">
          <RichText content={description} />
        </div>
      )}
    </>
  );
};
