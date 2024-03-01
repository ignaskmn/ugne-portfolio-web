import type { Footer } from "@/app/_types/payload-types";
import { fetchFooter } from "@/app/_api/fetchGlobals";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import bandcamp from "@/app/_assets/social_icons/bandcamp.svg";
import instagram from "@/app/_assets/social_icons/instagram.svg";
import linkedin from "@/app/_assets/social_icons/linkedin.svg";
import soundcloud from "@/app/_assets/social_icons/soundcloud.svg";
import spotify from "@/app/_assets/social_icons/spotify.svg";
import youtube from "@/app/_assets/social_icons/youtube.svg";
import Link from "next/link";

import Image from "next/image";
//add mobile menu that opens when burger is pressed

export default async function Footer() {
  // let footer: Footer | null = null;

  const socialIcons = {
    bandcamp,
    instagram,
    linkedin,
    soundcloud,
    spotify,
    youtube,
  };

  const footer: Footer = {
    email: "ugne@ugnemakselyte.com",
    phone: "+370 123 456789",
    address: "Berlin, Germany",
    socials: [
      {
        type: "bandcamp",
        link: "https://bandcamp.com",
        id: "65e0aff895d0541e9f45ac1f",
      },
      {
        type: "soundcloud",
        link: "https://soundcloud.com",
        id: "65e0b00595d0541e9f45ac20",
      },
      {
        type: "spotify",
        link: "https://spotify.com",
        id: "65e0b01f95d0541e9f45ac21",
      },
      {
        type: "youtube",
        link: "https://youtube.com",
        id: "65e0b02d95d0541e9f45ac22",
      },
      {
        type: "linkedin",
        link: "https://linkedin.com",
        id: "65e0b03895d0541e9f45ac23",
      },
      {
        type: "instagram",
        link: "https://instagram.com",
        id: "65e0b04495d0541e9f45ac24",
      },
    ],
    createdAt: "2024-02-29T16:20:17.478Z",
    updatedAt: "2024-02-29T16:27:01.142Z",
    id: "65e0aec15e419c5119f090d5",
  };

  // try {
  //   footer = await fetchFooter();
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className="bg-stone-200 text-black pt-4">
      <div className="flex flex-col md:flex-row gap-4 mx-4 md:ml-24 my-4 max-w-3xl">
        <div className="md:w-1/2 mb-8">
          <h3 className="text-4xl text-black mb-4">Contacts</h3>
          <div className="flex items-center gap-2 text-lg">
            <div className="w-4 h-4">
              <EnvelopeIcon />
            </div>
            <a href={`mailto:${footer?.email}`} className="pt-1">
              {footer?.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <div className="w-4 h-4">
              <PhoneIcon />
            </div>
            <a href={`tel:${footer?.phone}`} className="pt-1">
              {footer?.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <div className="w-4 h-4">
              <MapPinIcon />
            </div>
            <span className="pt-1">{footer?.address}</span>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-row flew-wrap items-center gap-4 max-w-sm">
            {footer?.socials?.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={social.type ? socialIcons[social.type] : ""}
                  alt={social.type ? social.type : ""}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full text-center flex items-center justify-center pt-8 pb-3">
        <span>Created by</span>
        <Link
          href="https://giltine.lt"
          target="_blank"
          rel="noreferrer"
          className="pl-2 underline underline-offset-8 decoration-orange-600 hover:text-orange-600 hover:no-underline hover:font-bold"
        >
          Giltinė
        </Link>
      </div>
    </div>
  );
}
