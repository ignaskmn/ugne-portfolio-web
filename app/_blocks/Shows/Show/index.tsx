import { Media } from '@/app/_components/Media';
import { Image } from '@/app/_types/payload-types';

import type { JSX } from "react";

export function Show({ title, link, image }: { title: string, link: string, image?: Image | string | null | undefined }): JSX.Element {
    return (
      <a href={link ?? ''} target="_blank" rel="noreferrer" className="block max-w-sm border border-1 border-stone-400 hover:border-white">
        <div className="px-4 pt-4 pb-2">
          <Media resource={image ?? ''} />
          <h3 className="text-white mt-2">{title}</h3>
        </div>
      </a>
    );
  }