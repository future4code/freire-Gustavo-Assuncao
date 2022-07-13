import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const Router = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route index element = {< HomePage />}  />
                <Route path="/trips/list" element = {< ListTripsPage />}  />
                <Route path="/trips/application" element = {<ApplicationFormPage />}  />
                <Route path="/login" element = {<LoginPage />}  />
                <Route path="/admin/trips/list" element = {<AdminHomePage />}  />
                <Route path="/admin/trips/create" element = {<TripDetailsPage />}  />
                <Route path="/admin/trips/:id" element = {<CreateTripPage />}  />
                <Route path="*" element = {<ErrorPage />}  />
            </Routes>
        </BrowserRouter>
    )
}

export default Router; 