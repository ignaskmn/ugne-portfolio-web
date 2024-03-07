import React from "react";

import { Page, Work } from "@/app/_types/payload-types";
import { ArchiveBlock } from "@/app/_blocks/Archive";
import { ImageBlock } from "@/app/_blocks/Image";
import { TextBlock } from "@/app/_blocks/Text";
import { RecordingBlock } from "@/app/_blocks/Recording";
import { VideoBlock } from "@/app/_blocks/Video";
const blockComponents = {
  archive: ArchiveBlock,
  textBlock: TextBlock,
  imageBlock: ImageBlock,
  videoBlock: VideoBlock,
  recordingBlock: RecordingBlock,
  // cta: CallToActionBlock,
};

export const Blocks: React.FC<{
  blocks: Page["blocks"] | Work["blocks"];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <div>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block: React.FC<any> = blockComponents[
              blockType
            ] as React.FC<any>; // Update the type of Block to accept any props

            if (Block) {
              return (
                <Block key={index} {...block} /> // Add a key prop to the Block component
              );
            }
          }
          return null;
        })}
      </div>
    );
  }

  return null;
};
