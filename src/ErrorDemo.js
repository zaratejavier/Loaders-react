import React, { useState } from "react";
import Axios from "axios";
import Loader from "./Loaderr";
const ErrorDemo = (props) => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await Axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      setToken(res.data.token);
    } catch (err) {
      console.log(err);
      const { response } = err;
      const { status } = response;
      if (response && status) {
        setStatus(status);
        if (status === 404) {
          setErrorMessage(
            "we can not find the page you are looking for, looks like we have the wrong url setup sorry"
          );
        }
        if (status === 400) {
          setErrorMessage(response.data.error);
          console.log(response.data.error);
        }
      }
      // debugger;
    } finally {
      setLoading(false);
    }
  }

  if (token) return <h1>logged in</h1>;
  if (loading) return <Loader loading={true} />;

  return (
    <div>
      <h1>Error Demo</h1>
      {/* <p>{status}</p> */}
      <p>{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>password</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
export default ErrorDemo;