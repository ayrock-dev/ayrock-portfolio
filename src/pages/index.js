import { Inter } from 'next/font/google';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import Button from '@/components/button';
import Stars from '@/components/stars';
import useWindowSize from '@/lib/use-window-size';

export default function Home() {
  const { width } = useWindowSize();

  return (
    <main className="min-h-screen flex flex-1 flex-col">
      <header className="fixed flex flex-col justify-center h-[64px] font-medium text-white px-4 border-b">
        <a href="https://twitter.com/ItsAyrock">Ayrock // Eric Lee</a>
      </header>
      <div className="min-h-screen flex flex-col page-background items-center justify-center">
        <div className="flex flex-col items-center mt-[64px]">
          <Stars width={width} />
          <Button href="#">
            @ItsAyrock <ChevronRightIcon className="inline-block w-[16px] w-[16px]" />
          </Button>
          <h1 className="text-8xl font-extrabold py-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Ayrock
          </h1>
          <p className="mb-8">Very important whimsical but beautiful subtitle</p>
        </div>
        <Button href="#" kind="primary">
          Find Me <ChevronRightIcon className="inline-block w-[16px] w-[16px]" />
        </Button>
      </div>
    </main>
  );
}
