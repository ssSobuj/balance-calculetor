import { useEffect } from "react";
import "./users.css";
import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  useEffect(()=>{
    document.title = "Users"
  })

  const users = useLoaderData();

  return (
    <>
      <div className="cards">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={`/img2/${user.id}.jpg`} alt="" />
            <h1>{user.name.slice(0, 15)}</h1>
            <h4>{user.email}</h4>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
            <Link to={`/user/${user.id}`}>
              <button>User details</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
