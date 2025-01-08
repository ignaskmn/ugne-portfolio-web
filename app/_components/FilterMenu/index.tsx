import { Category } from "./Category";
import type { Category as CategoryType } from "@/app/_types/payload-types";

export function FilterMenu({
  categories,
  activeCategory,
}: {
  categories?: (string | CategoryType)[];
  activeCategory: string | null;
}) {
  const sortedCategories = categories?.slice().sort((a, b) => {
    const titleA =
      typeof a === "object" && a.title ? a.title.toLowerCase() : "";
    const titleB =
      typeof b === "object" && b.title ? b.title.toLowerCase() : "";
    return titleA.localeCompare(titleB);
  });

  return (
    <div className="w-full flex flex-wrap justify-start gap-4 max-w-xl my-8">
      {sortedCategories &&
        sortedCategories?.length > 0 &&
        sortedCategories.map(
          (category: CategoryType | string, index: number) =>
            typeof category === "object" && (
              <Category
                key={index}
                title={
                  typeof category === "object" && category.title
                    ? category.title
                    : ""
                }
                isActive={activeCategory === category.id}
              />
            ),
        )}
      {activeCategory !== null && (
        <Category title="All" isActive={activeCategory === null} />
      )}
    </div>
  );
}
