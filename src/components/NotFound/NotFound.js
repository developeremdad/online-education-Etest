import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/home");
    }
    return (
        <div className="p-5">
            <h1 style={{
                fontSize: "90px"
            }} className="text-danger">Oops!</h1>
            <h5>404 - PAGE NOT FOUND</h5>
            <p>The page you are looking fo might have been removed had</p>
            <p>its name changed of is tepmorarily unavailable.</p>
            <button onClick={handleClick} className="btn-primary">GO TO HOMEPAGE</button>
        </div>
    );
};

export default NotFound;