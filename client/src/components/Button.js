import React from "react";

function Button(props) {
    let btnClass;
    switch (props.buttonType) {
        case "delete":
            btnClass = "btn-danger";
            break;
        case "save":
            btnClass = "btn-primary";
            break;
        default:
            console.log("Another thing you should never see.")
    }
    return (
        <button className={`btn ${btnClass}`} onClick={props.clickHandler}>{props.buttonType}</button>
    );
}

export default Button;