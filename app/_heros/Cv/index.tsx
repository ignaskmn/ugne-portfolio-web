import React from "react";

import { Cv } from "@/app/_types/payload-types";
import RichText from "@/app/_components/RichText";
import Link from "next/link";

const url =
  process.env.NODE_ENV === "production"
    ? "https://admin.ugnemakselyte.com"
    : "http://localhost:3000";

export const HeroCv: React.FC<Cv> = ({ name, image, richText, download }) => {
  return (
    <>
      {name && (
        <div className="my-8">
          <div className="mb-4 pl-4 pr-8 sm:pr-16 py-4 sm:py-8 border border-1 border-stone-400">
            <h1 className="text-4xl sm:text-5xl">{name}</h1>
            <div className="my-4 ml-4 inline-block max-w-xs sm:max-w-md">
              {richText && <RichText content={richText} />}
            </div>
          </div>
          {download && typeof download === "object" && (
            <Link
              href={url + download.url ?? ""}
              role="button"
              className={`lowercase inline-block whitespace-nowrap w-fit border border-1 border-white py-2 px-8 text-xl bg-black text-white hover:bg-white hover:text-black`}
              download={true}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              download pdf
            </Link>
          )}
        </div>
      )}
    </>
  );
};
