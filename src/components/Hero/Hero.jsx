import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm SaranRaj</h1>
        <p className={styles.description}>
        I'm a passionate MERN stack developer with a solid foundation in JavaScript, React, HTML, CSS, MongoDB, MySQL, and Node.js
        'm excited to embark on my professional journey and apply my knowledge to real-world projects. 
        I'm eager to contribute my skills and learn from experienced professionals in the field. 
        Let's connect and explore how I can be a valuable asset to your team
        </p>
        <a href="mailto:saranraj.1803164@srec.ac.in" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
