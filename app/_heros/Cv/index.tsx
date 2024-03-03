import React from "react";

import { Cv } from "@/app/_types/payload-types";
import RichText from "@/app/_components/RichText";

export const HeroCv: React.FC<Cv> = ({
    name,
    image,
    richText,
    download
}) => {
    return (
        <>
            {name && <div className="mt-8 pl-4 pr-8 sm:pl-12 sm:pr-24 py-8 sm:py-16 border border-1 border-stone-400 mb-8 md:mb-8 ">
                <h1 className="text-4xl sm:text-5xl">{name}</h1>
                <div className="p-4 inline-block max-w-xs sm:max-w-md">
                    {richText && <RichText content={richText} />}

                </div>
            </div>}
        </>
    );
};
