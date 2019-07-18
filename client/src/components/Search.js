import React from "react";

function Search(props) {
    // console.log(props);
    return (
        <form className="input-group" onSubmit={props.submitHandler} >
            <input className="form-control" type="text" name="query" value={props.query} onChange={props.changeHandler} />
            <div className="input-group-append">
                <input className="btn btn-primary" type="submit" disabled={!props.query} />
            </div>
        </form>
    );
}

export default Search;