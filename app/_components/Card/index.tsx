import { Work } from "@/app/_types/payload-types";
import { Media } from "@/app/_components/Media";

export function Card({ title, image, slug, category }: Work) {
  return (
    <a
      href={`/works/${slug}`}
      role="button"
      className="w-full block max-w-md border border-1 border-stone-400 hover:border-white"
    >
      <div className="p-4">
        <Media resource={image} />
        <div className="w-full text-right">
          <h3 className="font-mono text-sm mt-2 px-1 border border-1 border-stone-400 inline-block">
            {category && typeof category === "object" ? category.title : ""}
          </h3>
        </div>
        <h2 className="mt-1 text-xl">{title}</h2>
      </div>
    </a>
  );
}
