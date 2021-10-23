import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import ForgotPass from "./components/ForgotPass";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const routes = [
    {
        path: '/',
        exact: true,
        main: <Home />
    },
    {
        path: '/about',
        exact: false,
        main: <About />
    },
    {
        path: '/contact',
        exact: false,
        main: <Contact />
    },
    {
        path: '/notfound',
        exact: false,
        main: <NotFound />
    },
    {
        path: '/signin',
        exact: false,
        main: <SignIn />
    },
    {
        path: '/signup',
        exact: false,
        main: <SignUp />
    },
    {
        path: '/forgotpass',
        exact: false,
        main: <ForgotPass />
    },
];

export default routes;