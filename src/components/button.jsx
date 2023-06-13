import clsx from 'clsx';

export default function Button({ kind = 'default', className, href, children, ...extra } = {}) {
  const base = 'rounded-full flex items-center gap-[8px]';

  const styles = {
    primary:
      'px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-xl hover:shadow-[0_1px_40px] hover:shadow-violet-500/[0.5]',
    default: 'px-4 py-1 bg-white/[0.1] hover:bg-white/[0.2] border border-white/[0.05]',
  };

  if (href) {
    return (
      <a href={href} className={clsx(className, base, styles[kind])} {...extra}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={clsx(className, base, styles[kind])} {...extra}>
      {children}
    </button>
  );
}
