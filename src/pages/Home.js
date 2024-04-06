import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
    }

  return (
    <div className="container">
        <div className="py-4">
            <table className="table table-bordered shadow table-hover">
                <thead> 
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {
                        users.map((user, index)=>(
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    
    </div>
  )
}
