import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function UsersDetails() {
    const { id } = useParams()
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data)
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchData()
    }, [] )


    return (
        <div>
            <p>{users.id}</p>
            <p>{users.nom}</p>
            <p>{users.prenom}</p>
            <p>{users.email}</p>
            <p>{users.phone}</p>
        </div>
    );
}

export default UsersDetails;