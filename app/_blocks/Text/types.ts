import type { Page } from '@/app/_types/payload-types'

export type TextBlockProps = Extract<Page['blocks'], { blockType: 'textBlock' }>
