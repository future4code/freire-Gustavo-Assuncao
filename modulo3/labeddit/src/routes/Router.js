import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import PostPage from "../pages/PostPage/PostPage"
import Header from "../components/Header/Header";



const Router = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/" element={<FeedPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/posts/:id/comments" element={<PostPage />} />
                <Route path= "*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router; 