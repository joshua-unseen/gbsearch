import React from "react";

function Nav(props) {
    const activeClass = "nav-link active";
    const inactiveClass = "nav-link";
    let searchItemClass = inactiveClass;
    let savedItemClass = inactiveClass;
    switch (props.pathName) {
        case "/":
        case "/search":
            searchItemClass = activeClass;
            savedItemClass = inactiveClass;
            break;
        case "/books":
            searchItemClass = inactiveClass;
            savedItemClass = activeClass;
            break;
        default:
            console.log("something else you shouldn't be seeing");
    }
    return (
        <nav className="navbar navbar-expand navbar-light bg-light" >
            <a className="navbar-brand" href="#">Search the Google Books</a>
            <ul className="navbar-nav">
                <li className={searchItemClass}>
                    <a className="nav-link" href="/">Search</a>
                </li>
                <li className={savedItemClass}>
                    <a className="nav-link" href="/books">Saved Books</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;