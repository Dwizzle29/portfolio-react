import screenjot from "../assets/screenjot.png";
import mikaylascorner from "../assets/mikaylascorner.png";
import teamjacobvolleyball from "../assets/teamjacobvolleyball.png";
import harmonivinyls from "../assets/harmonivinyls.png";
import comingsoon from "../assets/comingsoon.png";
import { Card } from "../components/card.tsx";
import LiquidEther from "../components/liquidEther.tsx";
import Plasma from "../components/Plasma.tsx";
import SplitText from "../components/SplitTextProps.tsx";
import Iridescence from "../components/Iridescence.tsx";
import RotatingText from "../components/RoatatingTextProp.tsx";
import ScrollReveal from "../components/ScrollRevealProp.tsx";

export default function Portfolio() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <section className="main-content">
        <div className="liquid-ether-wrapper">
          <div className="liquid-ether-canvas">
            <Iridescence
              color={[0.2, 0.5, 1]}
              mouseReact={false}
              amplitude={1}
              speed={0.5}
            />
          </div>
          <div className="split-text-area liquid-overlay">
            <div className="text-area">
              <h2>Welcome to </h2>
              <SplitText
                text="Made By Mikayla"
                className="text-4xl font-bold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 90 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>
        </div>

        <ScrollReveal
          baseOpacity={100}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
          rotationEnd="bottom bottom"
        >
          <div className="rotating-text-container">
            <h1>Bridging: </h1>
            <div className="rotating-text-wrapper">
              <RotatingText
                texts={[
                  "Logic with Empathy",
                  "Form with Function",
                  "Data with Design",
                  "People with Platforms",
                ]}
                mainClassName="rotating-text-main"
                staggerFrom={"first"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.04}
                animatePresenceMode="wait"
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  mass: 1,
                }}
                rotationInterval={3000}
              />
            </div>
          </div>

          <h1>Featured Work</h1>
          <article className="portfolio-container">
            <div className="projects-portfolio-container">
              <Card
                image={screenjot}
                title="ScreenJot"
                description="A note-taking app that allows users to capture screenshots and annotate them with text, drawings, and highlights."
                link="https://screenjot.app/"
              />
              <Card
                image={mikaylascorner}
                title="Mikayla's Corner"
                description="A personal blog where I share my thoughts on web development, design, and my journey as a developer."
                link="https://mikaylascorner.com/"
              />
              <Card
                image={teamjacobvolleyball}
                title="Team Jacob Volleyball"
                description="A community platform for volleyball enthusiasts to connect, share tips, and organize local games and tournaments."
                link="https://teamjacobvolleyball.com/"
              />
              <Card
                image={harmonivinyls}
                title="Harmoni Vinyls"
                description="An e-commerce site specializing in vintage vinyl records, offering a curated selection for collectors and music lovers."
                link="https://harmonivinyls.com/"
              />
              <Card
                image={comingsoon}
                title="Project Coming Soon"
                description="Stay tuned for my next exciting project! More details will be revealed soon."
                link="#"
              />
            </div>
          </article>
        </ScrollReveal>
      </section>
    </>
  );
}
