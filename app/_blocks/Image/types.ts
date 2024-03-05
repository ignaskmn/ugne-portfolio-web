import type { Page } from '@/app/_types/payload-types'

export type ImageBlockProps = Extract<Page['blocks'], { blockType: 'imageBlock' }>[0]
