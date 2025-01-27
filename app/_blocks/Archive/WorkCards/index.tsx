import useSWR from "swr";
import { Card } from "@/app/_components/Card";
import { Work } from "@/app/_types/payload-types";

const hostUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL;
const fetcher = (url: string): Promise<{ docs: Work[] }> =>
  fetch(url).then((res) => res.json());

export function WorkCards({
  activeCategory,
}: {
  activeCategory: string | null;
}) {
  const { data, error } = useSWR(
    `${hostUrl}/api/works?depth=1&limit=100`,
    fetcher,
  );

  if (error)
    return <div>Having trouble connecting to server, check back soon</div>;
  if (!data) return <div>Loading...</div>;

  let works: Work[] = data.docs;
  works.sort((a, b) => {
    return (
      new Date(b.publishedAt ? b.publishedAt : "").getTime() -
      new Date(a.publishedAt ? a.publishedAt : "").getTime()
    );
  });

  return (
    <div className="w-full flex flex-col items-start md:grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {works &&
        works?.length > 0 &&
        works.map(
          (work: Work, index: number) =>
            work._status === "published" &&
            ((work.category &&
              typeof work.category === "object" &&
              work.category.id === activeCategory) ||
              !activeCategory) && <Card key={index} {...work} />,
        )}
    </div>
  );
}
