import type { Footer } from "@/app/_types/payload-types";
import { fetchFooter } from "@/app/_api/fetchGlobals";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import bandcamp from "@/app/_assets/social_icons/bandcamp.svg";
import linkedin from "@/app/_assets/social_icons/linkedin.svg";
import instagram from "@/app/_assets/social_icons/instagram.svg";
import soundcloud from "@/app/_assets/social_icons/soundcloud.svg";
import spotify from "@/app/_assets/social_icons/spotify.svg";
import youtube from "@/app/_assets/social_icons/youtube.svg";
import Link from "next/link";

import Image from "next/image";
//add mobile menu that opens when burger is pressed

export default async function Footer() {
  let footer: Footer | null = null;

  const socialIcons = {
    bandcamp,
    instagram,
    linkedin,
    soundcloud,
    spotify,
    youtube,
  };

  try {
    footer = await fetchFooter();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="bg-stone-200 text-black pt-4">
      <div className="flex flex-col md:flex-row gap-4 mx-4 md:ml-24 my-4 max-w-3xl">
        <div className="md:w-1/2 mb-8">
          <h3 className="text-4xl text-black mb-4">Contacts</h3>
          {footer?.email && (
            <div className="flex items-center gap-2 text-lg">
              <div className="w-4 h-4">
                <EnvelopeIcon />
              </div>
              <a href={`mailto:${footer?.email}`} className="pt-1">
                {footer?.email}
              </a>
            </div>
          )}
          {footer?.phone && (
            <div className="flex items-center gap-2 text-lg">
              <div className="w-4 h-4">
                <PhoneIcon />
              </div>
              <a href={`tel:${footer?.phone}`} className="pt-1">
                {footer?.phone}
              </a>
            </div>
          )}
          {footer?.address && (
            <div className="flex items-center gap-2 text-lg">
              <div className="w-4 h-4">
                <MapPinIcon />
              </div>
              <span className="pt-1">{footer?.address}</span>
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-row flew-wrap items-center gap-4 max-w-sm">
            {footer?.socials?.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="last:ml-12 last:scale-150"
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
    </div>
  );
}
