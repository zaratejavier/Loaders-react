import React from "react";
import useAxios from "axios-hooks";
import Loader from "./Loader";

export default function UseAxiosSpinner() {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://reqres.in/api/users?page=1"
  );

  if (loading) return <Loader loading={true} />;
  if (error) return <h1>error ocurred</h1>;
  return (
    <div>
      <h1>UseAxiosSpinner</h1>
      <button onClick={refetch}>reload</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {data && data.data.map((d) => <div>{d.first_name}</div>)}
    </div>
  );
}