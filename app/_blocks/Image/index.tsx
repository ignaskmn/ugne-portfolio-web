import Image from "next/image"
import type { Image as ImageType } from "@/app/_types/payload-types";
import { Media } from "@/app/_components/Media";
import { ImageBlockProps } from './types'
import Caption from "@/app/_components/RichText/Caption";

export function ImageBlock(props: ImageBlockProps): JSX.Element {
    const { image }: { image: ImageType } = props;
    return <div className="flex flex-col items-center">
        {typeof image === 'object' && (
            <Media
                resource={image}
            />)}
        {image?.caption && <Caption content={image.caption} className="mt-2"/>}
    </div>
};
