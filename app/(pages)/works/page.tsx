import { fetchDocs } from "@/app/_api/fetchDocs";
import { Card } from "@/app/_components/Card";
import type { Work, Category } from "@/app/_types/payload-types";
// import { FilterMenu } from "@/app/_components/FilterMenu";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const works: Work[] = await fetchDocs("works");
  // const categories: Category[] = await fetchDocs("categories");

  return (
    <main className="mx-4 md:mx-24 my-8">
      {/* <FilterMenu categories={categories} activeCategory="all" /> */}
      <div className="w-full flex flex-col items-start md:grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {works &&
          works?.length > 0 &&
          works.map(
            (work: Work, index: number) =>
              work._status === "published" && <Card key={index} {...work} />,
          )}
      </div>
    </main>
  );
}
