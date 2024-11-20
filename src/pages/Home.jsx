import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://node-js-back.onrender.com/api/books');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setBooks(data);
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
                {books.map(book => (
                    <li key={book._id}>
                        <Link to={`/books/${book._id}`}> {book.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;