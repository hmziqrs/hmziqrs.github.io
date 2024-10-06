import { username } from './data';
import SocialLinks from './socials';

export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-[family-name:var(--font-geist-mono)]">
        <div className="list-inside list-decimal text-sm text-center sm:text-left">
          <h1 className="text-2xl md:text-4xl sm:text-3xl">
            Busy building and accelerating
          </h1>
          <div className="h-2" />
          <p>more updates coming soon!</p>
          <div className="h-4" />
          <p className="text-lg sm:text-xl">follow @{username}</p>
        </div>
        <SocialLinks />
      </main>
    </div>
  );
}



