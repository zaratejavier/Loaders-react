import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";

export default function SpinnerDemo() {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let res = await Axios.get("https://reqres.in/api/users?page=1");
    setUsers(res.data.data);

    setTimeout(() => {
      setUsersLoading(false);
    }, 1000);
  }

  function renderUsers() {
    return users.map((user) => (
      <div key={`user-${user.id}`}>
        <h6>{`${user.first_name} ${user.last_name}`}</h6>
      </div>
    ));
  }
  // function getLoader() {
  //   return (
  //     <div className="sweet-loading">
  //       <HashLoader
  //         css={override}
  //         size={50}
  //         color={"#123abc"}
  //         loading={usersLoading}
  //       />
  //     </div>
  //   );
  // }
  return (
    <div>
      <h1>Spinner Demo</h1>
      {usersLoading ? <Loader loading={usersLoading} /> : renderUsers()}
    </div>
  );
}