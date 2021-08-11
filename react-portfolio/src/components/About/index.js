import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return  (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I'm a full stack web developer who has been certified in MERN stack applications. I enjoy the challenge of learning and applying new languages and libraries. I welcome any role that allows me to bring a vision to life for both potential employers and clients. I'm based in Salt Lake City, Utah and look forward to an opportunity to collaborate with my peers to broaden my skill set.
        </p>
      </div>
    </section>
  );
}

export default About;