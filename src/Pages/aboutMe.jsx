import RotatingText from "../components/RoatatingTextProp.tsx";

export default function About() {
  return (
    <>
      <section className="main-content">
        <h1>About section</h1>
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
        <article className="about-container">
          <p>
            Hi! My names Mikayla Dwyer and I'm currently a Swinburne University
            of Technology student. <br />I work part-time at a Automation and
            Software Engineering company as a Trainee Systems Control Software
            Developer where I have learnt so many valuable skills.
          </p>
          <h3>Study/Qualifications</h3>
          <ol>
            <li>
              <p>
                Box Hill Institute - Certificate II in Animal Studies | 2020
              </p>
            </li>
            <li>
              <p>
                Yarra Valley Grammar – Victoria Certificate of Education (VCE) |
                2020
              </p>
            </li>
            <li>
              <p>
                Swinburne University of Technology – Bachelor of Computer
                Science majoring in Software Development and minoring in UX
                Interaction Design | Current GPA - 2.83 | 2022 - Present
              </p>
            </li>
          </ol>
        </article>
      </section>
    </>
  );
}
