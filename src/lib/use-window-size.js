import React from 'react';

export default function useWindowSize() {
  const [state, set] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const handler = () => {
      set({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return state;
}

useWindowSize;
