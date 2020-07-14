import React, {useState, useEffect} from "react"
import Axios from "axios"
import { render } from "@testing-library/react"
import ClipLoader from "react-spinners/ClipLoader";
import Loaderr from "./Loaderr";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Spinner() {
  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(true)
  

  useEffect(() => {
    getUers()
  },[])

  async function getUers() {
    let res = await Axios.get('https://reqres.in/api/users?delay=1')
    setUsers(res.data.data)
    setTimeout(() =>{ setUsersLoading(false)},2000)
    setUsersLoading(false)
  }

  function renderUsers() {
    return users.map(user => (
      <>
        <div key ={`user-1${user.id}`}>
          <h6>{`${user.first_name} ${user.last_name}`}</h6>
        </div>
      </>
    ))
  }

  // function getLoader() {
  //   return (
  //      <div className="sweet-loading">
  //       <ClipLoader
  //         css={override}
  //         size={150}
  //         color={"#123abc"}
  //         loading={usersLoading}
  //       />
  //     </div>
      
  //   )
  // }

  return (
    <div>
      <h1>Spinner Demo</h1>
      {usersLoading ? <Loaderr loading={usersLoading}/> : renderUsers()}
  </div>
)
}

export default Spinner