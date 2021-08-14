import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return  (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: 400 }} alt="cover" />
      <div className="my-2">
        <p>
          I'm a full stack web developer based out of Salt Lake City, Utah. My wife and I are looking forward to our first child and the adventures he will bring. I work as a Production Manager at Meadow Gold Dairy. I am currently attending the University of Utah Coding Boot Camp. I have experience with HTML, CSS, JavaScript, Node, MongoDB, GraphQL, React, and more. My passion is for learning and mastering new languages and libraries to produce polished, robust, and responsive applications. I welcome any role that allows me to challenge myself as well as create solutions to satisfy clients and employers. I look forward to being able to collaborate with my peers and broaden my skill set.
        </p>
      </div>
    </section>
  );
}

export default About;