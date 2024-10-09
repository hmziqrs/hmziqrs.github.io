import React from 'react';
import { links } from './data';

export default function SocialLinks() {
  return (
    <div className="flex flex-row space-x-5">
      {links.map(({ name, url, Icon }) => (
        <a
          target="_blank"
          key={url}
          href={url}
          className="flex items-center space-x-3 px-4 py-2 bg-transparent border rounded-lg border-2 border-gray-400"
        >
          <Icon className="size-4" />
          <span className="text-xs font-black">{name}</span>
        </a>
      ))}
    </div>
  );
}





