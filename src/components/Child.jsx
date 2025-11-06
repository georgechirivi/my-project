function Child(props) {
    const handleClick = () => {
        props.handleLogin("Jorge");
    };

    return (
        <div className="child">
            <h2>Este es un componente hijo</h2>

            <p>Nombre del usuario: {props.username}</p>

            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default Child;