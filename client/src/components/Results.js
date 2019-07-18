import React from "react";
import Book from "./Book";
// import Save from "./Save";

function renderBooks(books, origin, clickHandler) {
    return books.map((item, idx) => {
        const theBook = {
            title: item.title,
            authors: item.authors,
            link: item.infoLink,
            description: item.description
        };
        switch(origin) {
            case "search":
                const imageLinks = item.imageLinks;
                theBook.image = imageLinks ? imageLinks.thumbnail: null;
                break;
            case "saved":
                theBook.id = item._id;
                theBook.image = item.image;
                break;
            default:
                console.log("you should never see this");
        }
        return (<li key={idx}><Book info={theBook} origin={origin} clickHandler={clickHandler} /></li>);
    });
}
function Results(props) {
    return (
        <div>
            {/* <p>Results container.  Books go in here.</p> */}
            <ul>{renderBooks(props.books, props.origin, props.clickHandler)}</ul>
        </div>
    );
}

export default Results;