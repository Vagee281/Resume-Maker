import React from "react";
import styles from "./TopBar.module.css";
import { Link } from "react-router-dom";
const TopBar = ({ organisationId }) => {
  const navButtons = [
    { text: "Home", route: "" },
    { text: "Create Resume", route: "/create-resume" },
    { text: "My Resume", route: "/create-resume" },
    { text: "Customer Reviews", route: "/create-resume" },
  ];

  const handleButtonClick = (route) => {
    console.log(`Button clicked: ${route}`);
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.navigation}>
        {navButtons.map((element, index) => (
          <Link to={element.route} className={styles.topbar_item}>
            {element.text}
          </Link>
        ))}
      </div>
      <div className={styles.logout}>
        <Link to="./login" className={styles.topbar_item}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
