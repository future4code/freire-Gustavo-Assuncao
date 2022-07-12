import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element {<HomePage/>}  />
                <Route path="" element {<ListTripsPage.js/>}  />
                <Route path="" element {</>}  />
                <Route path="" element {</>}  />
                <Route path="" element {</>}  />
                <Route path="" element {</>}  />
            </Routes>
        </BrowserRouter>


    )
}