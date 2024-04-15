import { useEffect, useState } from "react"
import User from "../components/User";
import './Users.css'
export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
  return (
    <div>  
        <div className="users-container">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            
        </div>
    </div>
  )
}
