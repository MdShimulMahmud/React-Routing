import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../data";
const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const [details, setDetails] = useState(data);

  const singlePerson = (str, num) => {
    if (str.length > num) {
      return str.slice(0, 50);
    } else {
      return str;
    }
  };

  const navigate = useNavigate();
  return (
    <>
      {details.map((detail) => {
        const { id, title, data } = detail;
        return (
          <p key={id}>
            <h1>{title}</h1>
            <h4>{singlePerson(data, 100)}</h4>
            <h5>
              <Link to={title} state={{ id, title, data }}>
                Learn more...
              </Link>
            </h5>
          </p>
        );
      })}
      <button onClick={() => navigate("/")}>Go to Home</button>
    </>
  );
};

export default Contact;
