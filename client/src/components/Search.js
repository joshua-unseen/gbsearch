import React from "react";

function Search(props) {
    // console.log(props);
    return (
        <form onSubmit={props.submitHandler} >
            <input type="text" name="query" value={props.query} onChange={props.changeHandler} />
            <input type="submit" disabled={!props.query} />
        </form>
    );
}

export default Search;