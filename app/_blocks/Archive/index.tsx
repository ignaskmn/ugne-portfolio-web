'use client';

import React, { useState } from 'react'
import { Category } from '@/app/_types/payload-types'
import { FilterMenu } from './FilterMenu'
import { WorkCards } from './WorkCards'

export function ArchiveBlock({ categories }: { categories?: (string | Category)[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  function handleCategoryClick(id: string | null) {
    setActiveCategory(id);
  }

  return <div className="flex flex-col items-center">
    <FilterMenu categories={categories} activeCategory={activeCategory} handleCategoryClick={handleCategoryClick} />
    <WorkCards activeCategory={activeCategory} />
  </div>
}
