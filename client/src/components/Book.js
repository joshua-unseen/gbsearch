import React from "react";
import Button from "./Button";
import API from "../utils/API";

const authors = (authors) => {
    if (authors && authors.length) {
        return "By" + authors.map(element => {
            return (" " + element);
        });
    }
    else return "Author not listed"
}

function Book(props) {
    // console.log(props.info);
    let buttonType;
    switch(props.origin) {
        case "search":
            buttonType = "save";
            break;
        case "saved":
            buttonType = "delete";
            break;
        default:
            console.log("You should never see this, either.")
    }
    return (
        <div className="row">
            {/* <p>A book element</p> */}
            <div className="col">
                <a href={props.info.link}><h3>{props.info.title}</h3></a>
                <div className="float-left mr-2">
                    <a href={props.info.link}>
                        <img src={props.info.image} alt={props.info.image ? "book cover": null} />
                    </a>
                </div>
                <div>{authors(props.info.authors)}
                <br />{props.info.description}</div>
            </div>
            <div className="col-1 d-flex align-items-end">
                <Button clickHandler={() => {props.clickHandler(props.info)}} buttonType={buttonType} />
            </div>
        </div>
    );
}

export default Book;