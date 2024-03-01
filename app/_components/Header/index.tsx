import Nav from "./Nav";
import type { Header } from "@/app/_types/payload-types";
import { fetchHeader } from "@/app/_api/fetchGlobals";
//add mobile menu that opens when burger is pressed

export default async function Header() {
  let header: Header | null = null;

  try {
    header = await fetchHeader();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 mx-4 md:ml-24 my-4">
      <Nav id={header?.id || ""} {...header} />
    </div>
  );
}
