import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {
    state = {
        books: [],
        filterBy: null,
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks() {
        bookService.query(this.state.filterBy).then(books => {
            this.setState({ books })
        })
    }


    setFilterBy = (filterBy) => {
        this.setState({
            filterBy,
        }, this.loadBooks)
    }
    render() {
        const { books } = this.state;
        if (!books) return (
            <React.Fragment>
                <BookFilter setFilterBy={this.setFilterBy} />
                <h1>Loading......</h1>
            </React.Fragment>
        )
        return (
            <React.Fragment>
                <BookFilter setFilterBy={this.setFilterBy} />
                <BookList books={books} />
            </React.Fragment>
        )

    }

}