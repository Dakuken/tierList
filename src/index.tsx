import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import logo from './assets/duck.gif'
import Favicon from 'react-favicon'

ReactDOM.render(
    <html lang="fr">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet" />
            <title>Tier list</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Favicon url={logo} animationDelay={500} />
        </head>
        <body>
            <img src={logo} alt="loading..." />
            <h1>Super tierlist</h1>
            <div id="root">
                <App />
            </div>
        </body>
    </html>
    , document.getElementById("root"));