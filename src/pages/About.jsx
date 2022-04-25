import React from "react";

function About() {
  const styles = {
    main: {
      color: "burgundy",
      backgroundColor: "gold",
      maxWidth: "75%",
    },
  };
  return (
    <main style={styles.main}>
      <h1>WE ARE BREAKOUT ROOM 5</h1>
      <img
        src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg"
        alt="great people"
        width="50%"
      />
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam
        debitis id animi ut temporibus accusamus accusantium quidem neque
        possimus perferendis sit, modi quae libero autem natus facere. Tempore,
        reprehenderit!
      </h3>
      <h4>
        Started: 2003 <br /> Location: Borås <br /> Employees: 13 <br />
      </h4>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam
        debitis id animi ut temporibus accusamus accusantium quidem neque
        possimus perferendis sit, modi quae libero autem natus facere. Tempore,
        reprehenderit!
      </h3>
    </main>
  );
}

export default About;
