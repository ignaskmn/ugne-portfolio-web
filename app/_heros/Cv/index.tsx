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
            {name && <div className="my-8 pl-4 pr-8 sm:pr-16 py-4 sm:py-8 border border-1 border-stone-400">
                <h1 className="text-4xl sm:text-5xl">{name}</h1>
                <div className="p-4 inline-block max-w-xs sm:max-w-md">
                    {richText && <RichText content={richText} />}

                </div>
            </div>}
        </>
    );
};
