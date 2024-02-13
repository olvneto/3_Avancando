/* eslint-disable react/jsx-key */
import { useState } from "react"

const ListRender = () => {

  const [list] = useState(["Matheus", "Pedro", "Josias"]);
  const [users, setUsers] = useState([
    {id: 1, name: "Pedro", age: 32},
    {id: 2, name:"Chico", age: 25},
    {id: 3, name: "André", age: 52}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      return(
        prevUsers.filter((user) => randomNumber !== user.id)
      )
    })
  }

  return (
    <>
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div><div>
        <button onClick={deleteRandom}>Delete one user</button>
      </div></>
  );
}

export default ListRender;