'use client'

import React from 'react'
import NextImage, { StaticImageData } from 'next/image'
import { Props as MediaProps } from '../types'

export const Image: React.FC<MediaProps> = props => {
  const {
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    resource,
    priority,
    fill,
    src: srcFromProps,
    alt: altFromProps,
  } = props

  const [isLoading, setIsLoading] = React.useState(true)

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps || ''

  const defaultTheme = require('tailwindcss/defaultTheme')

  const breakpoints = defaultTheme.screens;


  if (!src && resource && typeof resource !== 'string') {
    const {
      width: fullWidth,
      height: fullHeight,
      filename: fullFilename,
      alt: altFromResource,
    } = resource

    width = fullWidth ?? undefined
    height = fullHeight ?? undefined
    alt = altFromResource

    const filename = fullFilename

    src = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/images/${filename}`
  }

  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ')

  return (
    <NextImage
      className={[isLoading && imgClassName]
        .filter(Boolean)
        .join(' ')}
      src={src}
      alt={alt || ''}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false)
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps()
        }
      }}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      priority={priority}
    />
  )
}
