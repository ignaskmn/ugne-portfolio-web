import RichText from "..";

const Article: React.FC<{ className?: string; content: any }> = ({
  className,
  content,
}) => {
  return (
    <RichText
      content={content}
      className={["font-serif text-stone-200 text-lg space-y-4", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
};

export default Article;
