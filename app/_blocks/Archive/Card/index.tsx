import { Work } from "@/app/_types/payload-types";
import { Media } from "@/app/_components/Media";

export function Card({ title, image, slug, category}: Work) {
  return <div className="w-full block max-w-md border border-1 border-stone-400">
    <Media resource={image} />
    <h2>{title}</h2>
  </div>
}