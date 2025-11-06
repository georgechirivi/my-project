import { useState } from "react";

function Child(props) {
    const [username, setUserName ] = useState("Jorge");

    const handleClick = () => {
        props.handleLogin(username);
    };

    return (
        <div className="child">
            <h2>Este es un componente hijo</h2>

            <p>Nombre del usuario: {username}</p>

            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default Child;