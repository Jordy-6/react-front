import React from 'react';
import PropTypes from 'prop-types';

Bonjour.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired
};

function Bonjour({ name, setName }) {
    return (
        <div className="card">
            <h1>Bonjour {name}</h1>
            <input type="text" onChange={(event) => setName(event.target.value)} />
        </div>
    );
}

export default Bonjour;
