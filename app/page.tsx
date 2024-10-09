import { username } from './data';
import SocialLinks from './socials';

export default function Home() {
  return (
    <main className="fixed h-full w-full flex flex-col items-center justify-center bg-red-900 font-[family-name:var(--font-geist-mono)]">
      <div className="text-center sm:text-left">
        <h1 className="text-3xl md:text-5xl sm:text-4xl">
          Busy building and accelerating
        </h1>
        <div className="h-2" />
        <p className="text-sm">more updates coming soon!</p>
        <div className="h-4" />
        <p className="text-lg sm:text-xl">follow @{username}</p>
        <div className="h-4" />
      </div>
      <SocialLinks />
    </main>
  );
}














































