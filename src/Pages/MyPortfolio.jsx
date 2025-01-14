import screenjot from "../assets/screenjot.png";
import mikaylascorner from "../assets/mikaylascorner.png";
import teamjacobvolleyball from "../assets/teamjacobvolleyball.png";
import harmonivinyls from "../assets/harmonivinyls.png";
import comingsoon from "../assets/comingsoon.png";

export default function Portfolio() {
  return (
    <>
      <section className="main-content">
        <article>
          <div className="main-card">
            <p className="bubble-effect">Hey! I'm Mikayla</p>
            <p>I'm so happy you're here today</p>
          </div>
        </article>
        <h1>My Projects</h1>
        <article className="portfolio-container">
          <div className="projects-portfolio-container">
            <div>
              <div className="projects-portfolio-card">
                <img src={screenjot} alt="ScreenJot" />
                <div className="projects-portfolio-info">
                  <h3>ScreenJot</h3>
                  <p>
                    <a href="https://musical-travesseiro-1382ec.netlify.app/">
                      Learn More
                    </a>
                  </p>
                  <p>TV show rating platform for tv show lovers</p>
                  <p>VueJs, FireBase</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-portfolio-container">
            <div>
              <div className="projects-portfolio-card">
                <img src={mikaylascorner} alt="ScreenJot" />
                <div className="projects-portfolio-info">
                  <h3>Mikaylas corner</h3>
                  <p>
                    <a href="https://mikayladwyerabout.netlify.app/home">
                      Learn More
                    </a>
                  </p>
                  <p>A site created about me to test animation and forms</p>
                  <p>HTML, CSS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-portfolio-container">
            <div>
              <div className="projects-portfolio-card">
                <img src={teamjacobvolleyball} alt="teamjacobvolleyball" />
                <div className="projects-portfolio-info">
                  <h3>Team Jacob Volleyball</h3>
                  <p>
                    <a href="https://teamjacobvolleyball.netlify.app/">
                      Learn More
                    </a>
                  </p>
                  <p>
                    A design site created for my Volleyball Team Team Jacob in
                    the class DDD20015
                  </p>
                  <p>HTML, CSS, React</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-portfolio-container">
            <div>
              <div className="projects-portfolio-card">
                <img src={harmonivinyls} alt="harmonivinyls" />
                <div className="projects-portfolio-info">
                  <h3>harmoni vinyls</h3>
                  <p>
                    <a href="https://harmonivinyls.netlify.app/">Learn More</a>
                  </p>
                  <p>Website created for a design class that sells vinyls</p>
                  <p>HTML, CSS, React</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-portfolio-container">
            <div>
              <div className="projects-portfolio-card">
                <img src={comingsoon} alt="comingsoon" />
                <div className="projects-portfolio-info">
                  <h3>Coming Soon</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-portfolio-container">
            <div>
              <div className="projects-portfolio-card">
                <img src={comingsoon} alt="comingsoon" />
                <div className="projects-portfolio-info">
                  <h3>Coming Soon</h3>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
