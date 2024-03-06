import { Category } from './Category';
import type { Category as CategoryType } from '@/app/_types/payload-types'

export function FilterMenu({ categories }: { categories?: (string | CategoryType)[] }) {

    return (<div className="w-full flex flex-wrap justify-start gap-4 max-w-xl my-8">
        {categories && categories?.length > 0 && categories.map((category: CategoryType | string, index: number) => (
            <Category key={index} title={typeof (category) === "object" && category.title ? category.title : ""} isActive />
        ))}
    </div>)
}
