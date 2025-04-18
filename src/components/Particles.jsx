import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesComponent = ({ isMobile }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [isMobile]);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'white',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 50,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#d1d1d1',
        },
        links: {
          color: '#d1d1d1',
          distance: 100,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: 1,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        // particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return null;
};

export { ParticlesComponent };
