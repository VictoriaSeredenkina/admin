import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
    return (
       <div className="Start">
         <h1 className="titleStart">
            Кинопоиск
        </h1>
        <Link to="/home" className="TOP">Посомтреть топ 20 фильмов</Link>
       </div>
    );
};

export default StartPage