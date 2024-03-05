'use client';

import React from 'react'

import RichText from '@/app/_components/RichText'
import type { Category as CategoryType, Work } from '@/app/_types/payload-types'
import { Category } from './Category'
import { ArchiveBlockProps } from './types'
import { fetchWorks } from '@/app/_api/fetchWorks'
import { Card } from './Card'

export async function ArchiveBlock(props: ArchiveBlockProps) {
  const {
    id,
    populatedDocs,
    populatedDocsTotal,
    selectedDocs,
    categories,
  } = props

  let works: Work[] | null = null;

  try {
    works = await fetchWorks();
  } catch (error) {
    console.log(error);
  }
  console.log(works);

  return <div className="flex flex-col items-center">
    <div className="w-full flex flex-wrap justify-start gap-4 max-w-xl my-8">
      {categories && categories?.length > 0 && categories.map((category: CategoryType | string, index: number) => (
        <Category key={index} title={typeof (category) === "object" && category.title ? category.title : ""} isActive />
      ))}
    </div>
    <div className="w-full flex flex-col items-start md:grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {works && works?.length > 0 && works.map((work: Work, index: number) => (
        work._status === "published" && <Card key={index} {...work} />
      ))}
    </div>
  </div>
}
