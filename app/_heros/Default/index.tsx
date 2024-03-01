import React from "react";

import { Page } from "@/app/_types/payload-types";
import RichText from "@/app/_components/RichText";

export const HeroDefault: React.FC<Page["hero"]> = ({
  text,
  subtext,
  description,
}) => {
  return (
    <>
      {(text || subtext) && (
        <div className="my-8 pl-4 pr-8 sm:pr-16 py-4 sm:py-8 border border-1 border-stone-400">
          {text && <h1 className="text-4xl sm:text-5xl">{text}</h1>}
          {subtext && <RichText content={subtext} />}
        </div>
      )}
      {description && (
        <div className="p-4 inline-block max-w-xs sm:max-w-md">
          <RichText content={description} />
        </div>
      )}
    </>
  );
};
