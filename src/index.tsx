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
            <div id="Header">
                <h1>SUPER TIERLIST</h1>
                <img id="DuckHeader" src={logo} alt="Canardddddd" />
            </div>
            <div id="root">
                <App />
            </div>
            <div id="divButtonValider">
                <input type="button" id="BtnValider" value="Valider" />
            </div>
            <a href="POUET/test.html"> POUEEEEEEEEEEEEEET</a>
        </body>
    </html>
    , document.getElementById("root"));


let buttonValider: HTMLInputElement = (document.querySelector("#BtnValider")) as HTMLInputElement;


buttonValider.addEventListener("click", function () {
    alert("Votre liste a été validée");
});
