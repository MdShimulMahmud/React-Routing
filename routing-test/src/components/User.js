import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  console.log(searchParam);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParam({ name: name, age: age });
  };

  return (
    <div>
      <p>
        Hello search params <p>{searchParam.get("name")}</p>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default User;
