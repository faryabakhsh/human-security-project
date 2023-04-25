import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";

import styles from "./navbar.module.css";
// import ReorderIcon from "@mui/icons-material";
import ReorderIcon from "@mui/icons-material";
//import faryaCV.pdf from "../../Public/faryaCV";

function Navbar() {
  // const [expandNavbar, setExpandNavbar] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   setExpandNavbar(false);
  // }, [location]);

  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li>
          <h1 className={styles.name}>
            <a href="">Human Security</a>
          </h1>
        </li>

        <li className={styles.links}>
          <Link href="/members">Members</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
