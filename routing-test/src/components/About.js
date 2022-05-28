import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>I am About Page</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi
        corporis, debitis aspernatur repudiandae culpa ipsum fugiat nihil illo,
        a fugit est nesciunt aut ad, adipisci magni saepe molestias corrupti
        minus tempora praesentium. Consequuntur a porro, delectus odit assumenda
        doloremque, minus debitis sint dolores saepe ullam, explicabo aperiam
        dolorum totam?
      </div>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </>
  );
};

export default About;
