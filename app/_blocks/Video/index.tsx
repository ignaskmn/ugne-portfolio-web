import { Work } from "@/app/_types/payload-types";

export function VideoBlock(
  props: Extract<Work["blocks"], { blockType: "videoBlock" }>
): JSX.Element {
  console.log(props);

  return <div>VideoBlock</div>;
}
