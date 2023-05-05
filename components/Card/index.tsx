import Link from "next/link";
import styles from "./homecard.module.css";
import Image from "next/image";

const Card = (props: {
  name: string;
  href: string;
  imgUrl: string;
  author: string;
  prompt: string;
}) => {
  return (
    <>
      <div className={styles.sectionblack}>
        <div className={styles.projects}>
          {/* <h2 className={styles.h2}>ALL ARTICLES</h2> */}
          <div className={styles.article}>
            <div className={styles.text}>
              <h3 className={styles.h3}>{props.name}</h3>

              <div className={styles.blackbox}>
                <p>
                  {props.prompt}
                  <Link
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    href={props.href}
                  >
                    read more
                  </Link>
                </p>
              </div>
              <br />
              <h5 className={styles.h5}>Author:</h5>
              <ul className={styles.ul}>
                <p>{props.author}</p>
              </ul>
            </div>
            <Image
              src={props.imgUrl}
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

export default Card;
