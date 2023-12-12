import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../app/HomePage/HomePage";
import About from "../app/About/About";
import Product from "../app/Product/Product";

const RouterNav = () => {

    return(
        <>
            <Routes>
                <Route path = '/' element= {<HomePage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
            </Routes>
        </>
    )
}

export default RouterNav;