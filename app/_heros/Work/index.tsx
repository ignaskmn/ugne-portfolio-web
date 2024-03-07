import { Media } from "@/app/_components/Media";
import RichText from "@/app/_components/RichText";
import { Work } from "@/app/_types/payload-types";

export function HeroWork({ title, image, richText, category }: Work) {
  return (
    <div className="container flex flex-col items-center mb-8">
      <div className="flex flex-col items-end text-right">
        <Media resource={image} />
        <h3 className="font-mono mt-2 px-1 border border-1 border-stone-400 inline-block">
          {category && typeof category === "object" ? category.title : ""}
        </h3>
      </div>
      <h1 className="text-4xl sm:text-5xl py-4 md:py-8">{title}</h1>
      {richText && (
        <RichText
          className="text-lg p-4 border border-1 border-stone-400"
          content={richText}
        />
      )}
    </div>
  );
}
