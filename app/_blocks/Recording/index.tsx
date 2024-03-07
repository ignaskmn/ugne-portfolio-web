import { Work } from "@/app/_types/payload-types";

export function RecordingBlock(
  props: Extract<Work["blocks"], { blockType: "recordingBlock" }>
): JSX.Element {
  console.log(props);

  return <div>RecordingBlock</div>;
}
