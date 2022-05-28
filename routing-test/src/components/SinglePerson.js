import React from "react";
import { useLocation } from "react-router-dom";
const SinglePerson = () => {
  const dummy =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, totam repellat quo tenetur, vitae perferendis labore recusandae pariatur error dolores cum, quia est maxime hic aut accusantium neque adipisci rerum nostrum placeat animi eaque reprehenderit eveniet et! Dolor neque explicabo, minima voluptatem nisi impedit ex, doloribus labore ipsum sapiente labore at reiciendis id autem architecto qui animi ";

  // dynamic routing
  // const { title } = useParams();
  // const [singleData, setSingleData] = useState("");

  // useEffect(() => {
  //   const person = data.filter((event) => event.title === title);
  //   setSingleData(person[0].data);
  // }, [title]);
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>{location.state.title}</h1>
      <p>{`${location.state.data} ${dummy}`}</p>
    </div>
  );
};

export default SinglePerson;
