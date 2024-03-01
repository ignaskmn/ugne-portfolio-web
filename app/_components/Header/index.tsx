import Nav from "./Nav";
import type { Header } from "@/app/_types/payload-types";
import { fetchHeader } from "@/app/_api/fetchGlobals";
//add mobile menu that opens when burger is pressed

export default async function Header() {
  // let header: Header | null = null;

  // try {
  //   header = await fetchHeader();
  // } catch (error) {
  //   console.log(error);
  // }

  const header: Header = {
    navItems: [
      {
        link: {
          type: "custom",
          url: "cv",
          label: "cv",
        },
        id: "65e084cf5cf5b5d56c81b943",
      },
      {
        link: {
          type: "reference",
          reference: {
            value: {
              id: "65df655d9892a3b98fea59fd",
              title: "works",
              publishedAt: "2024-02-29T11:25:18.054Z",
              hero: {
                type: "none",
              },
              blocks: [],
              slug: "works",
              meta: {
                title: "works - Ugnė Makselytė portfolio website",
                description: "This is a categorised list of my works",
                image: "65dd936f4d9e5a3ea27e21a7",
              },
              _status: "published",
              createdAt: "2024-02-28T16:54:53.695Z",
              updatedAt: "2024-02-29T11:25:19.269Z",
            },
            relationTo: "pages",
          },
          label: "works",
        },
        id: "65e084ef5cf5b5d56c81b945",
      },
      {
        link: {
          type: "reference",
          reference: {
            value: {
              id: "65dedca98952c44b9dbb7399",
              title: "shows",
              publishedAt: "2024-02-29T11:25:37.255Z",
              hero: {
                type: "default",
                text: "svietas",
                subtext: [
                  {
                    children: [
                      {
                        text: "a show for ",
                      },
                      {
                        children: [
                          {
                            text: "Cashmere radio",
                          },
                        ],
                        linkType: "custom",
                        newTab: true,
                        type: "link",
                        url: "https://cashmereradio.com/",
                      },
                      {
                        text: "",
                      },
                    ],
                    type: "h3",
                  },
                ],
                description: [
                  {
                    children: [
                      {
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel eleifend nulla. Proin malesuada pulvinar massa nec facilisis. Suspendisse tellus mauris, iaculis vitae tincidunt faucibus, pulvinar eget est.",
                      },
                    ],
                  },
                ],
              },
              blocks: [],
              slug: "shows",
              meta: {
                title: "shows - Ugnė Makselytė portfolio website",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel eleifend nulla. Proin malesuada pulvinar massa nec facilisis. Suspendisse tellus mauris, iaculis vitae tincidunt faucibus, pulvinar eget est.",
                image: "65dd936f4d9e5a3ea27e21a7",
              },
              _status: "published",
              createdAt: "2024-02-28T07:11:37.370Z",
              updatedAt: "2024-02-29T11:25:38.616Z",
            },
            relationTo: "pages",
          },
          label: "shows",
        },
        id: "65e084e35cf5b5d56c81b944",
      },
    ],
    createdAt: "2024-02-27T08:26:14.976Z",
    updatedAt: "2024-02-29T15:43:21.744Z",
    id: "65dd9ca69113ebdf3f851a28",
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 mx-4 md:ml-24 my-4">
      <Nav id={header?.id || ""} />
    </div>
  );
}
