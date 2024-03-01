/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    pages: Page;
    works: Work;
    shows: Show;
    categories: Category;
    images: Image;
    recordings: Recording;
    "payload-preferences": PayloadPreference;
    "payload-migrations": PayloadMigration;
  };
  globals: {
    footer: Footer;
    header: Header;
    cv: Cv;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  roles?: ("admin" | "user")[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  publishedAt?: string | null;
  hero: {
    type: "none" | "home" | "default";
    text?: string | null;
    subtext?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    description?:
      | {
          [k: string]: unknown;
        }[]
      | null;
  };
  blocks?:
    | (
        | {
            richText?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: "textBlock";
          }
        | {
            image: string | Image;
            id?: string | null;
            blockName?: string | null;
            blockType: "imageBlock";
          }
      )[]
    | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Image | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
  id: string;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "works".
 */
export interface Work {
  id: string;
  title: string;
  categories?: (string | null) | Category;
  publishedAt?: string | null;
  image: string | Image;
  richText?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  blocks: (
    | {
        richText?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: "textBlock";
      }
    | {
        image: string | Image;
        id?: string | null;
        blockName?: string | null;
        blockType: "imageBlock";
      }
    | {
        video?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: "videoBlock";
      }
    | {
        recording?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: "recordingBlock";
      }
  )[];
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Image | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shows".
 */
export interface Show {
  id: string;
  title: string;
  publishedAt?: string | null;
  image: string | Image;
  richText?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  recording: string | Recording;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Image | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "recordings".
 */
export interface Recording {
  id: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: "users";
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  socials?:
    | {
        type?:
          | (
              | "bandcamp"
              | "soundcloud"
              | "spotify"
              | "youtube"
              | "linkedin"
              | "instagram"
            )
          | null;
        link: string;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems?:
    | {
        link: {
          type?: ("reference" | "custom") | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: "pages";
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cv".
 */
export interface Cv {
  id: string;
  name?: string | null;
  image: string | Image;
  richText?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  education?:
    | {
        institution: string;
        degree: string;
        startDate: string;
        endDate?: string | null;
        id?: string | null;
      }[]
    | null;
  experience?:
    | {
        organization: string;
        position: string;
        startDate: string;
        endDate?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

// declare module 'payload' {
//   export interface GeneratedTypes extends Config {}
// }
