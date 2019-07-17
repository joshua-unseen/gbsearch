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
                console.log(res);
                this.setState({ books: res.data })
            }
            )
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <p>Saved books</p>
                <Results />
            </div>
        );
    }
}

export default Books;