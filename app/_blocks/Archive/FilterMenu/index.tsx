import { Category } from './Category';
import type { Category as CategoryType } from '@/app/_types/payload-types'

export function FilterMenu({ categories, activeCategory, handleCategoryClick }: { categories?: (string | CategoryType)[], activeCategory: string | null, handleCategoryClick: (index: string | null) => void}) {

    return (<div className="w-full flex flex-wrap justify-start gap-4 max-w-xl my-8">
        {categories && categories?.length > 0 && categories.map((category: CategoryType | string, index: number) => (
            typeof(category) === "object" && <Category key={index} title={typeof (category) === "object" && category.title ? category.title : ""} isActive={activeCategory === category.id} onClick={() => handleCategoryClick(category.id)} />
        ))}
        {activeCategory !== null && <Category title="All" isActive={activeCategory === null} onClick={() => handleCategoryClick(null)} />}
    </div>)
}
