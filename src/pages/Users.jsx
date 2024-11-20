import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchData()
    }, [] )

    return (
        <div>
            <h1>Accueil</h1>
            <p>test</p>
            <ul>
                {users.map(users => (
                    <li key={users.id}>
                        <Link to={`/users/${users.id}`}> {users.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;