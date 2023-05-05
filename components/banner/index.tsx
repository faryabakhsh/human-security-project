import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.h2}>Human Security Project - group 6</h1>
      <p className={styles.prompt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button>View all articles</button>
    </div>
  );
};

export default Banner;
