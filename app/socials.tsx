import React from "react";
import { links } from "./data";
export default function SocialLinks() {
  return (
    <div className="flex flex-row flex-wrap gap-4 px-4">
      {links.map(({ name, url, Icon }) => (
        <a
          target="_blank"
          key={url}
          href={url}
          className="flex items-center py-2 sm:py-3 px-5 sm:px-7 my-2 bg-transparent rounded-lg border-2 border-zinc-400"
        >
          <Icon className="size-4 sm:size-5" />
          <div className="w-3" />
          <span className="text-sm sm:text-base font-black">{name}</span>
        </a>
      ))}
    </div>
  );
}
