import screenjot from "../assets/screenjot.png";
import ArdiunoBoard from "../assets/ArdiunoBoard.jpeg";
import smartCoasterWithFriends from "../assets/smartCoasterWithFriends.png";
import mikaylascorner from "../assets/mikaylascorner.png";
import teamjacobvolleyball from "../assets/teamjacobvolleyball.png";
import harmonivinyls from "../assets/harmonivinyls.png";
import comingsoon from "../assets/comingsoon.png";
import { Card } from "../components/card.tsx";
import LiquidEther from "../components/liquidEther.tsx";
import Plasma from "../components/Plasma.tsx";
import SplitText from "../components/SplitTextProps.tsx";
import Iridescence from "../components/Iridescence.tsx";
import ScrollReveal from "../components/ScrollRevealProp.tsx";
import ScrollStack, {
  ScrollStackItem,
} from "../components/ScrollStackProps.tsx";

export default function Portfolio() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <section>
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
          baseOpacity={90}
          enableBlur={true}
          baseRotation={0}
          blurStrength={0.5}
          rotationEnd="top bottom"
        >
          <div className="main-content">
            <h1>Featured Work</h1>
            <ScrollStack>
              <ScrollStackItem>
                <p>This is one</p>
              </ScrollStackItem>
              <ScrollStackItem>
                <p>This is one</p>
              </ScrollStackItem>
              <ScrollStackItem>
                <p>This is one</p>
              </ScrollStackItem>
              {/* <ScrollStackItem>
                <Card
                  image={screenjot}
                  title="ScreenJot"
                  description="A note-taking app that allows users to capture screenshots and annotate them with text, drawings, and highlights."
                  link="https://musical-travesseiro-1382ec.netlify.app"
                />
              </ScrollStackItem>
              <ScrollStackItem>
                <Card
                  image={mikaylascorner}
                  title="Mikayla's Corner"
                  description="A personal blog where I share my thoughts on web development, design, and my journey as a developer."
                  link="https://mikayladwyerabout.netlify.app"
                />
              </ScrollStackItem>
              <ScrollStackItem>
                <Card
                  image={teamjacobvolleyball}
                  title="Team Jacob Volleyball"
                  description="Idea was created in a Design Class which I expanded into a function website for a local volleyball team to manage schedules and player info."
                  link="https://teamjacobvolleyball.netlify.app"
                />
              </ScrollStackItem>
              <ScrollStackItem>
                <Card
                  image={harmonivinyls}
                  title="Harmoni Vinyls"
                  description="Initial idea was developed within a design class were I expanded into a function website as an e-commerce site specializing in vintage vinyl records, offering a curated selection for collectors and music lovers."
                  link="https://harmonivinyls.netlify.app/"
                />
              </ScrollStackItem>
              <ScrollStackItem>
                <Card
                  image={comingsoon}
                  title="Project Coming Soon"
                  description="Stay tuned for my next exciting project! More details will be revealed soon."
                  link="#"
                />
              </ScrollStackItem> */}
            </ScrollStack>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
