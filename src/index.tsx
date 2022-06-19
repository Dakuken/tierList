import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ico from "./assets/duck.gif";

ReactDOM.render(
    <html lang="fr">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet" />
            <title>Tier list</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href={ico} />
        </head>
        <body>
            <h1>Super tierlist</h1>
            <div id="root">
                <App />
            </div>
        </body>
    </html>
    , document.getElementById("root"));