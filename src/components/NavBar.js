import '../styles//navBar.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <div><Link to="/clients">clients</Link></div>
                    </div>
                    <div className="nav-link-wrapper">
                        <div><Link to="/actions">actions</Link></div>
                    </div>
                    <div className="nav-link-wrapper">
                        <div><Link to="/analytics">analytics</Link></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NavBar;
