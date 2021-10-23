import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ForgotPass from '../ForgotPass';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './home.scss';

const Home = () => {
    return (
        <Router>
            <div className="welcome-page">
                <h1 className="welcome-page-title"> Welcome to Social NetWork for <br /> <strong>Pet Owner</strong> </h1>
                <h4 className="welcome-page-description">
                    Hope you feel happy when using my web
                </h4>
                <SignIn />



            </div>


            <Switch>
                <Route path="/forgotpass" >
                    <ForgotPass />
                </Route>
                <Route path="/signup" >
                    <SignUp />
                </Route>
            </Switch>
        </Router>






    );
}

export default Home;