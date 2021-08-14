import React from 'react';

function Portfolio({ projects }) {
  return (
    <section id='portfolio'>
      {projects.map((item) => {
        return (
          <div className='portfolio-item'>
            <h1>{item.title}</h1>
              <a href={item.link} target="_blank" rel="noreferrer">Live Application</a>
              <a href={item.repo} target="_blank" rel="noreferrer">GitHub Repository</a>
              <div>
                <img
                  src={require(`../../assets/images/${item.image}`).default}
                  alt={item.title}
                  className='img'
                />
              </div>
          </div>
              )
      })}
    </section>
  )
};

export default Portfolio;