import React, { useEffect, useState } from "react";

const RestApi = () => {
  const url = "https://rest-api-without-db.herokuapp.com/users";

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  // post method
  const getAllUsers = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetched data!");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log("Error found" + err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // delete method

  const handleDelete = (id) => {
    fetch(url + `/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("ID doesn't matched");
        }
        return getAllUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {loading && <h2>CRUD Operation</h2>}
      {users &&
        users.map((user) => {
          const { id, username, email } = user;
          return (
            <article key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <button type="text" onClick={handleDelete(id)}>
                {" "}
                Edit
              </button>
              <button type="text"> Delete</button>
            </article>
          );
        })}
    </div>
  );
};

export default RestApi;
