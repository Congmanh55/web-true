import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../app/HomePage/HomePage";

const RouterNav = () => {

    return(
        <>
            <Routes>
                <Route path = '/' element= {<HomePage/>}/>
            </Routes>
        </>
    )
}

export default RouterNav;