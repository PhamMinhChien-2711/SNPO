import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-inverse">
                <Link class="navbar-brand" to="/"><strong>🐈SNPO</strong></Link>
                <ul class="nav navbar-nav">
                    <li >
                        <Link to="/about"><strong>About</strong></Link>
                    </li>
                    <li>
                        <Link to="/contact"><strong>Contact </strong></Link>
                    </li>

                    <li>
                        <Link to="/signup"> <strong>Not a member ? Sign Up</strong></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;