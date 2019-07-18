import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light" >
                <a className="navbar-brand" href="#">Search the Google Books</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/books">Saved Books</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Nav;