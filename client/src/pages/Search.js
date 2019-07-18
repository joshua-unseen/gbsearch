import React from "react";
import SearchBox from "../components/Search";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        query: "",
        books: []
    }
    changeHandler = (event) => {
        const {name, value} = event.target;
        // console.log(name + " " + value);
        this.setState({[name]: value});
    };
    submitHandler = (event) => {
        event.preventDefault();
        API.searchBooks(this.state.query)
            .then(res => {
                console.log(res.data.items);
                const books = res.data.items;
                this.setState({
                    books,
                    query: ""
                });
            });        
    };

    saveBook = (book) => {
        console.log(book);
        API.saveBook(book)
            .then(res => {
                console.log(res.data);
                const unsaved = this.state.books.filter(item => (item.id !== res.data));
                console.log(unsaved);
                this.setState({books: unsaved});
            })
            .catch(err => {console.log(err)});
    };

    render() {
        return (
            <div className="container">
                <SearchBox query={this.state.query} changeHandler={this.changeHandler} submitHandler={this.submitHandler} />
                <Results books={this.state.books} clickHandler={this.saveBook} origin="search"/>
            </div>
        );
    };
}

export default Search;