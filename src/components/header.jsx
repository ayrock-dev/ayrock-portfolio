import clsx from 'clsx';
import Link from 'next/link';

const HEADER_HEIGHT = 'h-[48px]';

function NavItem({ href, children }) {
  const base = 'flex items-center transition text-white hover:text-slate-500';

  // Handle relative links with next/link, Next.js `basePath` will be added
  if (href && href[0] === '/') {
    return (
      <Link href={href} className={clsx(base, HEADER_HEIGHT)}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={clsx(base, HEADER_HEIGHT)}>
      {children}
    </a>
  );
}

function Nav() {
  const AFTER_BORDER =
    "after:content-[''] after:container after:mx-auto after:bg-white/[0.08] after:h-[1px] after:absolute after:bottom-0 after:left-0 after:right-0";

  const items = [
    { href: '/', title: 'Ayrock // Eric Lee' },
    { href: '/', title: 'Portfolio' },
    { break: true },
    { href: '/', title: 'GitHub' },
    { href: '/', title: 'Twitter' },
    { href: '/', title: 'LinkedIn' },
  ];

  return (
    <nav className="w-full">
      <ul className={clsx('container mx-auto flex items-center gap-[24px]', AFTER_BORDER)}>
        {items.map((item, index) => {
          if (item.break) {
            return <li key={`break-${index}`} className="flex-1" />;
          }

          const { href, title } = item;
          return (
            <li key={title}>
              <NavItem href={href}>{title}</NavItem>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 flex HEADER_HEIGHT flex-col items-center px-4 backdrop-blur">
      <Nav />
    </header>
  );
}
