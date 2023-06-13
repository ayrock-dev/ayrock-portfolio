import clsx from 'clsx';

export default function Stars({ n = 50, width = 100, height = 100, className } = {}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={clsx(className)}
    >
      <g fill="#fff" opacity="0.7">
        {Array.from({ length: n }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * width}
            cy={Math.random() * height}
            r={Math.random() + 0.5}
            opacity="0.11"
          ></circle>
        ))}
      </g>
    </svg>
  );
}
