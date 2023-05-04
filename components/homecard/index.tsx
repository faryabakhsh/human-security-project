import styles from "./homecard.module.css";
import Image from "next/image";

const Homecard = () => {
  return (
    <>
      <div className={styles.sectionblack}>
        <div className={styles.projects}>
          <h2 className={styles.h2}>My Current Job:</h2>
          <div className={styles.article}>
            <div className="text">
              {/* <h4>Latest Project</h4> */}
              <h3 className={styles.h3}>Software Developer at Alfabolt </h3>

              <div className="blackbox">
                <li>
                  While working I focus on writing idiomatic, scalable, and
                  accessible code{" "}
                </li>{" "}
                <li>
                  I always prioritize teamwork and collaboration with others as
                  a part of my workflow
                </li>{" "}
                <li> Built a custom design system with storybook </li>{" "}
                <li>
                  {" "}
                  Have developed various frontend web pages through Figma
                  designs{" "}
                </li>{" "}
                <li>
                  {" "}
                  I develop new features to an existing application while fixing
                  bugs and improve code quality.{" "}
                </li>
                {/* <a
                  href="https://github.com/faryabakhsh/Netflix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here
                </a> */}
                {/* , and multiple links look <a href="#">like this</a> and
                <a href="#">like this</a>. */}
              </div>
              <h5 className={styles.h5}>Technologies that I use include:</h5>
              <ul className={styles.ul}>
                {/* <li>HTML</li>
                <li>CSS</li> */}
                <li>Typescript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Storybook</li>
              </ul>
            </div>
            <Image
              src=""
              alt="Screenshot alfabolt."
              width={400}
              height={400}
              className={styles.projectImg}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecard;
