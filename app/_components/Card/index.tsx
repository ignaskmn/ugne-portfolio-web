import React, { Fragment } from 'react'
import Link from 'next/link'

import { Work } from '@/app/_types/payload-types'

export const Card: React.FC<{
  doc: Work,
}> = props => {
const {
    doc
} = props

const { slug, title, categories, meta } = doc as Work
const { description, image: metaImage } = meta || {}

const hasCategories = categories && Array.isArray(categories) && categories.length > 0
const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
const href = `/works/${slug}`

  return (
    <h1>Card</h1>
  )
}