import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Hello, It's Me</h2>
        <h1 className={styles.title}>SARANRAJ</h1>
        <p className={styles.description}>
        I'm a passionate MERN stack developer with a solid foundation in JavaScript, React, HTML, CSS, MongoDB, MySQL, and Node.js
        I'm excited to embark on my professional journey and apply my knowledge to real-world projects. 
        I'm eager to contribute my skills and learn from experienced professionals in the field. 
        Let's connect and explore how I can be a valuable asset to your team
        </p>
        <a href="/Public/SARANRAJ.pdf" download="SaranrajResume.pdf" className={styles.contactBtn}>
        
          Resume
        </a>
      </div >
      <img
        src={getImageUrl("hero/image.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
