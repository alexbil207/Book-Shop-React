import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from '../cmps/BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {
    state = {
        books: [],
        selectedBook: null,
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

    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }

    setFilterBy = (filterBy) => {
        this.setState({
            filterBy,
        }, this.loadBooks)
    }
    render() {
        const { books, selectedBook } = this.state;
        if (!books) return (
            <React.Fragment>
                <BookFilter setFilterBy={this.setFilterBy} />
                <h1>Loading......</h1>
            </React.Fragment>
        )
        return (
            <React.Fragment>
                {!selectedBook && <BookFilter setFilterBy={this.setFilterBy} />}
                {!selectedBook && <BookList books={books} setSelectedBook={this.setSelectedBook} />}
                {selectedBook && <BookDetails book={selectedBook} setSelectedBook={this.setSelectedBook} />}
            </React.Fragment>
        )

    }

}