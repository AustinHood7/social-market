import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
          preset: {
          },
          background: {
              color: {
                  value: "#000000",
              },
              opacity: {
                value: .1,
              },
          },
          backgroundMask: {
            composite: 'destination-out'
          },
          fpsLimit: 120,
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "",
                  },
                  onHover: {
                      enable: true,
                      mode: "bubble",
                  },
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                  resize: {
                    enable: true,
                    delay: .5,
                  }
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  attract: {
                    distance: 0,
                    duration: .4,
                    easing: 'easing-out-quad',
                    factor: 1,
                    maxSpeed: 30,
                    speed: 1,
                  },
                  bounce: {
                    distance: 200,
                  },
                  bubble: {
                    distance: 200,
                    duration: 2,
                    opacity: .8,
                    size: 20,
                  },
                  connect: {
                    distance: 40,
                    links: {
                      opacity: .2,
                    },
                    radius: 0,
                  },
                  grab: {
                    distance: 300,
                },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
                  slow: {
                    factor: 3,
                    radius: 200,
                },
              },
          },
          particles: {
              color: {
                  value: "#6ee7b7",
              },
              links: {
                  color: "#bae6fd",
                  distance: 150,
                  enable: true,
                  opacity: 0,
                  width: 1,
              },
              collisions: {
                  enable: false,
              },
              move: {
                  directions: "bottom",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: true,
                  speed: 2,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 80,
              },
              opacity: {
                value: {
                  min: .1,
                  max: .5,
                },
                random: {
                  enable: true,
                  minimumValue: .1,
                }
            },
              shape: {
                  type: "circle",
              },
              size: {
                random: {
                    enable: true,
                    minimumValue: 1,
                },
                value: {
                    min: 1,
                    max: 10,
                }
              },
          },
          detectRetina: true,
      }}
  />
    )
}

export default Particle