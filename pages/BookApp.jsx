import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from '../cmps/BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {
    state = {
        books: [],
        selectedBook: null,
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks() {
        bookService.query().then(books => {
            this.setState({ books })
        })
    }
    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }


    render() {
        const { books, selectedBook } = this.state;
        if (!books) return <h1>Loading......</h1>
        return (
            <React.Fragment>
                {!selectedBook && <BookFilter />}
                {!selectedBook && <BookList books={books} setSelectedBook={this.setSelectedBook} />}
                {selectedBook && <BookDetails book={selectedBook} setSelectedBook={this.setSelectedBook} />}
            </React.Fragment>
        )

    }

}