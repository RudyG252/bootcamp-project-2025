import style from "./page.module.css";

export default function Resume() {
  return (
    <main className={style.resume_background}>
      <h1 className={style.page_title}>Resume</h1>
      <div className={style.resume}>
        <a href="resume.pdf" download>
          Download Resume
        </a>
        <section className={style.section}>
          <h2 className={style.section_title}>Education</h2>
          <div className={style.entry}>
            <h3 className={style.entry_title}>
              <strong>Henry High School, San Diego, CA</strong>
            </h3>
            <p className={style.entry_info}>2021-2025 | GPA: UW: 3.8, W: 4.4</p>
            <p className={style.entry_info}>
              Relevant Coursework: AP Computer Science Principles, AP Computer
              Science A, CS 3-4
            </p>
          </div>
          <div className={style.entry}>
            <h3 className={style.entry_title}>
              <strong>
                California Polytechnic State University, San Luis Obispo, CA
              </strong>
            </h3>
            <p className={style.entry_info}>Freshman | GPA: N/A</p>
            <p className={style.entry_info}>
              <strong>Relevant Coursework:</strong> CSC 202 (in progress)
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.section_title}>Skills</h2>
          <ul className={style.skill_list}>
            <li>Java</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>HTML5</li>
            <li>Git</li>
            <li>React</li>
            <li>REST API</li>
            <li>Express.js</li>
            <li>Firebase</li>
          </ul>
        </section>
        <section className={style.section}>
          <h2 className={style.section_title}>Projects</h2>
          <div className={style.entry}>
            <h3 className={style.entry_title}>Internal Robot Data Visualization Tool</h3>
            <p className={style.entry_info}>
              <strong>
                Designed and built a web app that would take data from firebase
                and analyze then visualize it
              </strong>
            </p>
            <p className={style.entry_description}>
              <strong>Languages and Tools used:</strong> Javascript, React,
              Firebase Real Time Database, Vercel
            </p>
            <ul className={style.entry_list}>
              <li>
                Utilized firebase's real time database to sort and store data
                from a data submission app
              </li>
              <li>
                Took the data from firebase and used javascript to analyze it
                and create usable analyzation metrics
              </li>
              <li>
                Worked with other members of my team using React to create
                different pages in which <br />
                you can view teams performances in various ways
              </li>
              <li>
                Taught younger team members the inner workings of the backend so
                that when I graduated they could maintain the site
              </li>
            </ul>
          </div>
          <div className={style.entry}>
            <h3 className={style.entry_title}>Bettter Showdown API</h3>
            <p className={style.entry_info}>
              <strong>
                Designed and built an API that could determine pokemon/player
                usage stats in pokemon showdown
              </strong>
            </p>
            <p className={style.entry_description}>
              <strong>Languages and Tools used:</strong> Javascript, Firebase
              Firestore, Express.js, REST API
            </p>
            <ul className={style.entry_list}>
              <li>
                Created a REST API in Expressjs that combed through the basic
                pokemon showdown API and created stats out of it
              </li>
              <li>
                Utilized the original API to get things like matchIDs and sort
                through the logs from match IDs
                <br />
                to obtain useful information and show it to the user
              </li>
              <li>
                Eventually realized the amount of calls the project was making
                to the original API were unsustainable
                <br />
                so created a firebase firestore to cache data
              </li>
            </ul>
          </div>
          <div className={style.entry}>
            <h3 className={style.entry_title}>FRC team 4738 2024/2025 Robots</h3>
            <p className={style.entry_info}>
              <strong>
                Worked with a team to create software for two FRC robots
              </strong>
            </p>
            <p className={style.entry_description}>
              <strong>Languages and Tools used:</strong> Java, WPILIB Git
            </p>
            <ul className={style.entry_list}>
              <li>
                Worked on code for vision, teleoperated controls, and autonomous
                movement for a robot through WPILIB for two years
              </li>
              <li>
                Collaborated with an entire team of programmers working on the
                same project by having different people
                <br />
                work on different issues through multitudes of github issues and
                branches
              </li>
              <li>
                Taught younger programmers the basics of java and robot code,
                and helped them work on different projects
                <br />
                and subsystems by assigning them work using github issues
              </li>
            </ul>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.section_title}>Experience</h2>
          <div className={style.entry}>
            <h3 className={style.entry_title}>
              Robotics Lead Programmer(2024) and Strategy Director(2025)
            </h3>
            <ul className={style.entry_list}>
              <li>
                Taught younger programmers Java, basic robot code, and git
                workflow
              </li>
              <li>
                Collaborated with other programmers on Robot code for 2024 and
                2025
              </li>
              <li>
                Designed and built the backend of our teams robot evaluation
                tool
              </li>
              <li>
                Created schedules for and taught scouters how to use our team's
                robot evaluation tool
              </li>
              <li>
                Worked with other teams at competitions to create match strategy
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
