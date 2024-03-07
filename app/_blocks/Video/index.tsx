import { Work } from "@/app/_types/payload-types";

export function VideoBlock(
  { video }: Extract<Work["blocks"], { blockType: "videoBlock" }>
): JSX.Element {
  console.log(video);
  return <div>VideoBlock</div>;
}
