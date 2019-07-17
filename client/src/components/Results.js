import React from "react";
import Book from "./Book";
// import Save from "./Save";

function renderBooks(books) {
    return books.map((item, idx) => {
        const theBook = {
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            link: item.volumeInfo.infoLink,
            description: item.volumeInfo.description
        };
        // console.log(theBook);
        const thumbnail = item.volumeInfo.imageLinks;
        // console.log(thumbnail);
        theBook.image = thumbnail ? thumbnail.thumbnail: null;
        return (<li key={idx}><Book info={theBook} /></li>);
    });
}
function Results(props) {
    return (
        <div>
            {/* <p>Results container.  Books go in here.</p> */}
            <ul>{renderBooks(props.books)}</ul>
        </div>
    );
}

export default Results;