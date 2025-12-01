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
            <h2>Welcome to </h2>
            <div className="text-area">
              <SplitText
                text="Made By Mikayla Dwyer"
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
        <article>
          <div className="main-card">
            <p className="bubble-effect">Hey! I'm Mikayla</p>
            <p>I'm so happy you're here today</p>
          </div>
        </article>
        <h1>My Projects</h1>
        <article className="portfolio-container">
          <div className="projects-portfolio-container"></div>
        </article>
      </section>
    </>
  );
}
