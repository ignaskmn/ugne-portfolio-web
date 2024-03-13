import type { Image } from "@/app/_types/payload-types";
import { Show } from "./Show"

interface showsBlock {
  shows?:
    | {
        title: string;
        link: string;
        image?: string | Image | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'showsBlock';
}

export function ShowsBlock({ shows }: showsBlock): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {shows?.map((show, index) => {
        return (
          <Show key={index} {...show} />
        );
      })}
    </div>
  );
}
