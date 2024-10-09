import { username } from './data';
import SocialLinks from './socials';

export default function Home() {
  return (
    <main className="fixed h-full w-full flex flex-col items-center justify-center font-[family-name:var(--font-geist-mono)]">
      <div className="text-center sm:text-left w-full sm:max-w-4xl sm:mx-auto bg-black">
        <h1 className="text-4xl">Busy building</h1>
        <div className="h-2" />
        <p className="text-sm">more updates coming soon!</p>
        <div className="h-4" />
        <p className="text-lg sm:text-xl">follow @{username}</p>
        <div className="h-4" />
        <SocialLinks />
      </div>
    </main>
  );
}




