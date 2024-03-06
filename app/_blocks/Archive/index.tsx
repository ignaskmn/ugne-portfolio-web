import React from 'react'

import type { Category as Category, Work } from '@/app/_types/payload-types'
import { fetchWorks } from '@/app/_api/fetchWorks'
import { FilterMenu } from './FilterMenu'
import { Card } from '@/app/_components/Card'

export async function ArchiveBlock({ categories }: { categories?: (string | Category)[] }) {

  let works: Work[] | null = null;

  try {
    works = await fetchWorks();
  } catch (error) {
    console.log(error);
  }

  return <div className="flex flex-col items-center">
    <FilterMenu categories={categories} />
    <div className="w-full flex flex-col items-start md:grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {works && works?.length > 0 && works.map((work: Work, index: number) => (
        work._status === "published" && <Card key={index} {...work} />
      ))}
    </div>
  </div>
}
