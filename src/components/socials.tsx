import React from "react";
import { links } from "@/data/personal";
import Link from "next/link";
export default function SocialLinks() {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {links.map(({ name, url, Icon }) => (
        <Link
          target="_blank"
          key={url}
          href={url}
          className="flex items-center
          py-3 px-8 gap-4
          rounded-md border border-zinc-300/50"
        >
          <Icon className="size-3.5 sm:size-4" />
          <span className="text-xs sm:text-sm">{name}</span>
        </Link>
      ))}
    </div>
  );
}
