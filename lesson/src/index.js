import React from 'react';
import ReactDOM from 'react-dom';

function MyApp() {
    return (
        <ul>
            <li>Caesar</li>
            <li>Cobb</li>
            <li>Apple Walnut</li>
        </ul>
    )
}

// JSX - looks almost identical to HTML
ReactDOM.render(
    <MyApp/>, 
    document.getElementById("root")
)


