import React from "react";

function Button(props) {
    return (
        <button onClick={props.clickHandler}>{props.buttonType}</button>
    );
}

export default Button;