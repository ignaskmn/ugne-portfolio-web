interface videoBlock {
  type?: "youtube" | null;
  ytcode?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "videoBlock";
}

export function VideoBlock({ type, ytcode }: videoBlock): JSX.Element {
  return (
    <div className="flex justify-center ">
      {type && type === "youtube" && (
        <iframe
          className="w-full max-w-[700px] aspect-video my-4"
          src={`https://www.youtube.com/embed/${ytcode ?? ""}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      )}
    </div>
  );
}
