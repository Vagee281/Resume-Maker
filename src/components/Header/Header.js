import React from "react";

import resumeSvg from "../../assets/images/resume.svg";

import styles from "./Header.module.css";
import Lottie from "lottie-react";
import resumeAnimation from "../../assets/lottie files/resumeAnimation.json";
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
        Craft Your Unique <span>Resume</span>
        </p>  
        <p className={styles.heading}>
        Make Your Profile Shine, <span>for Free!</span>
        </p>
      </div>
      <div className={styles.right}>
        <Lottie
          animationData={resumeAnimation}
          loop
          autoplay
          style={{ width: 400, height: 400 }}
        />
      </div>
    </div>
  );
}

export default Header;
