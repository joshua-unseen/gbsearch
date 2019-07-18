import React from "react";
import Book from "./Book";
// import Save from "./Save";

function renderBooks(books, origin, clickHandler) {
    return books.map((item, idx) => {
        let theBook = {};
        switch(origin) {
            case "search":
                const {title, authors, infoLink, description} = item.volumeInfo;
                const imageLinks = item.volumeInfo.imageLinks;
                const image = imageLinks ? imageLinks.thumbnail: null;
                const googleID = item.id;
                theBook = {title, authors, link: infoLink, description, image, googleID};
                break;
            case "saved":
                theBook = item;
                break;
            default:
                console.log("you should never see this");
        }
        // const theBook = {
        //     title: item.title,
        //     authors: item.authors,
        //     link: item.infoLink,
        //     description: item.description
        // };
        return (<li key={idx} className="list-group-item"><Book info={theBook} origin={origin} clickHandler={clickHandler} /></li>);
    });
}
function Results(props) {
    return (
        <div>
            {/* <p>Results container.  Books go in here.</p> */}
            <ul className="list-group">{renderBooks(props.books, props.origin, props.clickHandler)}</ul>
        </div>
    );
}

export default Results;