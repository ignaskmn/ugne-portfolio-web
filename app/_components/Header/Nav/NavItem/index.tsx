import Link from "next/link";
import type { Page } from "@/app/_types/payload-types";

interface NavItemProps {
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
}

// destructure props

export default function NavItem({ link }: NavItemProps) {
  return (
    <>
      {link.type === "reference" &&
        typeof link.reference?.value === "object" && (
          <Link
            href={(link.reference?.value as Page)?.slug || ""}
            role="button"
            className={`lowercase inline-block w-full border border-1 border-white py-2 px-8 text-xl bg-black text-white hover:bg-white hover:text-black`}
          >
            {link.label}
          </Link>
        )}
      {link.type === "custom" && (
        <Link
          href={link.url || ""}
          role="button"
          className={`lowercase inline-block w-full border border-1 border-white py-2 px-8 text-xl bg-black text-white hover:bg-white hover:text-black`}
        >
          {link.label}
        </Link>
      )}
    </>
  );
}
