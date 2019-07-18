import React from "react";
import Results from "../components/Results";
import API from "../utils/API";

class Books extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    };
    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res.data);
                this.setState({ books: res.data })
            }
            )
            .catch(err => console.log(err));
    };
    deleteBook = (book) => {
        console.log(book);
        API.deleteBook(book.id)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) });
    };
    render() {
        return (
            <div className="container">
                <Results books={this.state.books} clickHandler={this.deleteBook} origin="saved" />
            </div>
        );
    }
}

export default Books;