import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useStateList, useInterval } from 'react-use';

import Button from '@/components/button';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Page from '@/components/page';

function HomeSection({ children }) {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      {children}
    </section>
  );
}

function TypistList({ items = [], interval = 1000 }) {
  const { state, next } = useStateList(items);
  useInterval(next, interval);
  return <mark className="rounded bg-white/[0.2] px-2 py-1 text-white">{state}</mark>;
}

export default function Home() {
  const IAM_LIST = ['thinker', 'designer', 'strategist', 'coder'];

  return (
    <Page>
      <Header />
      <main className="radial-bloom flex min-h-screen flex-1 flex-col gap-[128px] pt-[48px]">
        {/* hero */}
        <HomeSection>
          {/* banner */}
          <div className="mt-[64px] flex flex-col items-center">
            <Button href="https://twitter.com/ItsAyrock">
              @ItsAyrock <ChevronRightIcon className="inline-block w-[16px]" />
            </Button>
            <h1 className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text py-6 text-8xl font-extrabold text-transparent">
              Ayrock
            </h1>
            <p className="mb-[48px] text-lg font-normal lg:text-xl">
              I am a <TypistList items={IAM_LIST} />.
            </p>
          </div>
          <Button href="#" kind="primary">
            Find Me <ChevronRightIcon className="inline-block w-[16px]" />
          </Button>
        </HomeSection>
        {/* web stack */}
        <HomeSection>
          <p className="text-4xl font-extrabold">A Modern Web Stack</p>
          <p className="mb-[48px] text-lg font-normal">
            Building web applications with scalable, front-end architecture.
          </p>
          <div className="grid w-full grid-flow-row grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-16 rounded-lg bg-white p-4" />
            ))}
          </div>
        </HomeSection>
      </main>
      <Footer />
    </Page>
  );
}
