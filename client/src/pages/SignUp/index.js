import { Checkbox } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';

const SignUp = () => {
    return (
        <Router>
            <div className="SignIn">
                <form >
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <div className="col-2-content">
                            <label className='col-2'>🐈SNPO</label><br />
                            <span>Chúng tôi gắn kết những người nuôi thú cưng <br />trên toàn quốc</span>
                        </div>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <label className="col-1" >Sign Up</label> <br />
                        <span className="title">UserName</span>
                        <input
                            type="text"
                            className="form-control"
                            id="text-field"
                            placeholder="UserName"
                        />
                         <span className="title">Email</span>
                        <input
                            type="text"
                            className="form-control"
                            id="text-field"
                            placeholder="Email"
                        />
                        <span className="title">Password</span>

                        <input
                            type="password"
                            className="form-control"
                            id="text-field"
                            placeholder="Password"
                        />
                        <span className="title">Confirm Password</span>

                        <input
                            type="password"
                            className="form-control"
                            id="text-field"
                            placeholder="Confirm Password"
                        />
                        <label style={{ float: "left", marginTop: 10 }}>
                            <input
                                type="checkbox"
                            />
                            <label style={{ marginLeft: 10 }}>Tôi đồng ý với điều khoản</label>
                        </label>
                        <br />
                        <button style={{ marginTop: 6 }} type="submit" className="btn btn-success">CREATE ACCOUNT</button>
                        <br />
                    </div>
                </form >



            </div >
        </Router>



    );

}

export default SignUp;