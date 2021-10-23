import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import userApi from "../../api/user";

import './index.css';

const SignIn = () => {
    const history = useHistory()

    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const login = () => {
        userApi.login({
            email: state.email,
            password: state.password,
        }).then(res => {
            history.push('/about')
        })
    }

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <Router>
            <div className="SignIn">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <div className="col-2-content">
                            <label className='col-2'>🐈SNPO</label><br />
                            <span>Chúng tôi gắn kết những người nuôi thú cưng <br />trên toàn quốc</span>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <label className="col-1" >Sign in here</label> <br />
                        <span className="title">Email</span>
                        <input
                            value={state.email}
                            type="text"
                            className="form-control"
                            id="text-field"
                            placeholder="Email"
                            name="email"
                            onChange={onChange}
                        />
                        <span className="title">Password</span>
                        <span className="forgot"><Link to="/forgotpass">Forgot your password?</Link></span>
                        <input
                            value={state.password}
                            name="password"
                            type="password"
                            className="form-control"
                            id="text-field"
                            placeholder="Password"
                            onChange={onChange}
                        />
                        <button style={{ marginTop: 6 }} onClick={login} type="submit" className="btn btn-success">LOG IN</button>
                        <br />
                        <span className="title">Not a member?<Link to="/signup"> Create Account</Link></span>
                    </div>
                </form >



            </div >
        </Router>



    );

}

export default SignIn;