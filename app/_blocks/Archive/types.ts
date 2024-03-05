import type { Page, Category, Work, Show } from '@/app/_types/payload-types'

export type ArchiveBlockProps = {
    populateBy?: ('collection' | 'selection') | null;
    relationTo?: ('works' | 'projects') | null;
    categories?: (string | Category)[] | null;
    limit?: number | null;
    selectedDocs?:
      | (
          | {
              relationTo: 'works';
              value: string | Work;
            }
          | {
              relationTo: 'shows';
              value: string | Show;
            }
        )[]
      | null;
    populatedDocs?:
      | (
          | {
              relationTo: 'works';
              value: string | Work;
            }
          | {
              relationTo: 'shows';
              value: string | Show;
            }
        )[]
      | null;
    populatedDocsTotal?: number | null;
    id?: string | null;
    blockName?: string | null;
    blockType: 'archive';
  }
