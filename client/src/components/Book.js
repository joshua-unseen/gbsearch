import React from "react";
import SaveBtn from "./Save";
import API from "../utils/API";

function authors(authors) {
    if (authors) {
        return "By" + authors.map(element => {
            return (" " + element);
        });
    }
    else return "Author not listed"
}

const saveBook = (book) => {
    console.log(book);
    API.saveBook(book)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)});
}

function Book(props) {
    // console.log(props.info);
    return (
        <div>
            {/* <p>A book element</p> */}
            <a href={props.info.link}><h3>{props.info.title}</h3></a>
            <div>
                <a href={props.info.link}>
                    <img src={props.info.image} alt="book cover" />
                </a>
            </div>
            <div>{authors(props.info.authors)}
            <br />{props.info.description}</div>
            <div>
                <SaveBtn clickHandler={()=>{saveBook(props.info)}} />
            </div>
        </div>
    );
}

export default Book;