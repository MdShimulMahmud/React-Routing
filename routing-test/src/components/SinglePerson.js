import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
const SinglePerson = () => {
  const dummy =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, totam repellat quo tenetur, vitae perferendis labore recusandae pariatur error dolores cum, quia est maxime hic aut accusantium neque adipisci rerum nostrum placeat animi eaque reprehenderit eveniet et! Dolor neque explicabo, minima voluptatem nisi impedit ex, doloribus labore accusantium officiis quos corrupti alias incidunt esse? Ratione qui beatae provident veritatis iure nostrum repellat officia adipisci cumque, doloribus assumenda minus voluptatum dolorum necessitatibus corporis, officiis dolor repudiandae obcaecati sunt sed quod neque a sequi eveniet. Modi libero repudiandae, aut tempora, aliquam neque tenetur ipsum sapiente labore at reiciendis id autem architecto qui animi ";

  const { title } = useParams();
  const [singleData, setSingleData] = useState("");

  useEffect(() => {
    const person = data.filter((event) => event.title === title);
    setSingleData(person[0].data);
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{`${singleData.title} ${dummy}`}</p>
    </div>
  );
};

export default SinglePerson;
