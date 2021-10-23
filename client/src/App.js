import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Header from './components/Header';

const useStyles = makeStyles(() => ({
    circularProgress: {
        marginLeft: '50%',
        marginTop: '5rem',
    },
}));
function App() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loading = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(loading);
        };
    }, []);

    return (

        <div className="App">
            {loading && <Preloader />}
            <Suspense
                fallback={
                    <CircularProgress size='3rem' className={classes.circularProgress} />
                }
            >

                <Header />


                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" >
                        <About />
                    </Route>
                    <Route path="/contact" >
                        <Contact />
                    </Route>
                    <Route path="/signin" >
                        <SignIn />
                    </Route>
                    <Route path="/signup" >
                        <SignUp />
                    </Route>
                </Switch>

            </Suspense>
        </div>

    );
}

export default App;
 