import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const Users = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await result.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="main">
      <h2 className="main__title">Users</h2>
      {
        users 
        ? (
          <div className="products">
            {users.map((user) => (
              <div key={user.id} className="products__car">
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>
              </div>
            ))}
          </div>
        ) 
        : <Loader />
      }
    </div>
  )
}

export default Users;