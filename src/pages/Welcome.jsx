import {useState} from 'react';
import Bonjour from "../components/Bonjour.jsx";
import MultipleFive from "../components/MultipleFive.jsx";
import Counter from "../components/Counter.jsx";


function Welcome() {
    const [name, setName] = useState('')

    return (
        <div>
            <Bonjour name={name} setName={setName}/>
            <MultipleFive />
            <Counter />
        </div>
    );
}

export default Welcome;