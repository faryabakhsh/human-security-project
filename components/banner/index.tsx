import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.h2}>Human Security Project - group 6</h1>
      <div className={styles.prompt}>
        <ul style={{ listStyle: "none" }}>
          <li>Aimun Ilyas Malhi</li>
          <li>Farya Bakhsh </li>
          <li>Hurria bin Abdullah</li>
          <li>Wajahat Kareem</li>
          <li>Laraib Shahid</li>
          <li>Allah Bachayo</li>
        </ul>
      </div>
      {/* <button>View all articles</button> */}
    </div>
  );
};

export default Banner;
