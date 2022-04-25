import React from "react";
import projectImage1 from "../assets/projects/pexels-fauxels-3183150.jpg";
import projectImage2 from "../assets/projects/pexels-fauxels-3183153.jpg";
import projectImage3 from "../assets/projects/pexels-monstera-9430882.jpg";
import projectImage4 from "../assets/projects/pexels-pixabay-372787.jpg";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <div>
          <img src={projectImage1} alt="A picture of something" />
          <h3>Something</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ut possimus similique eos fugiat qui earum minus deleniti aut
            inventore necessitatibus provident, ipsam, quisquam hic. Ipsam vitae
            consequatur ratione rerum.
          </p>
        </div>
        <div>
          <img src={projectImage2} alt="A picture of something" />
          <h3>Something</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ut possimus similique eos fugiat qui earum minus deleniti aut
            inventore necessitatibus provident, ipsam, quisquam hic. Ipsam vitae
            consequatur ratione rerum.
          </p>
        </div>
        <div>
          <img src={projectImage3} alt="A picture of something" />
          <h3>Something</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ut possimus similique eos fugiat qui earum minus deleniti aut
            inventore necessitatibus provident, ipsam, quisquam hic. Ipsam vitae
            consequatur ratione rerum.
          </p>
        </div>
        <div>
          <img src={projectImage4} alt="A picture of something" />
          <h3>Something</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ut possimus similique eos fugiat qui earum minus deleniti aut
            inventore necessitatibus provident, ipsam, quisquam hic. Ipsam vitae
            consequatur ratione rerum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
