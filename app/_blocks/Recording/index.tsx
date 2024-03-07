interface recordingBlock {
  type?: ("bandcamp" | "soundcloud") | null;
  bandcamp?: {
    bctype?: ("album" | "track") | null;
    album?: string | null;
    track?: string | null;
  };
  soundcloud?: {
    sctype?: ("track" | "playlist") | null;
    track?: string | null;
    playlist?: string | null;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: "recordingBlock";
}

export function RecordingBlock({
  type,
  bandcamp,
  soundcloud,
}: recordingBlock): JSX.Element {
  return (
    <div className="flex justify-center">
      {type && type === "bandcamp" && (
        <iframe
          className="w-full max-w-[700px] h-fit"
          src={`https://bandcamp.com/EmbeddedPlayer/album=${
            bandcamp?.album
          }/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/${
            bandcamp?.track ? "track=" + bandcamp?.track + "/" : ""
          }transparent=true/`}
          seamless
        />
      )}
      {type && type === "soundcloud" && (
        <iframe
          className={`w-full max-w-[700px] my-4 ${
            soundcloud?.sctype === "playlist" ? "h-[450px]" : "h-full"
          }`}
          src={`https://w.soundcloud.com/player/?url=${
            soundcloud?.sctype === "playlist"
              ? "https://api.soundcloud.com/playlists/" + soundcloud?.playlist
              : "https://api.soundcloud.com/tracks/" + soundcloud?.track
          }&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
        />
      )}
    </div>
  );
}
