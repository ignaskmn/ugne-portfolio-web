import React from "react";

import { Page } from "@/app/_types/payload-types";
import { HeroDefault } from "@/app/_heros/Default";
import { HeroHome } from "@/app/_heros/Home";

const heroes = {
  default: HeroDefault,
  home: HeroHome,
};

export const Hero: React.FC<Page["hero"]> = (props) => {
  const { type } = props || {};

  if (!type || type === "none") return null;

  const HeroToRender = heroes[type];

  if (!HeroToRender) return null;

  return (
    <div className="max-w-fit 2xl:py-24">
      <HeroToRender {...props} />
    </div>
  );
};
