import React from "react"
import useAxios from "axios-hooks"
import Loaderr from "./Loaderr"

export default function UserAxiosSpinner() {


  const [{ data, loading, error }, refetch] = useAxios('https://reqres.in/api/users?delay=1')
  
  if (loading) return <Loaderr loading={true} />
  if (error) return <h1>error ocurred</h1>
  
  return (
    <div>
      <h1>UserAxiosSpinner</h1>
      <button onClick={refetch}>reload</button>
      {data && data.map(d => {
        return (
          <div>{d.first_name} </div>
        )
      })}
    </div>
  )
}