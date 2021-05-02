const { Link } = ReactRouterDOM;
import { bookService } from "../services/book-service.js";


export class BookDetails extends React.Component {
    state = {
        book: null,
    }

    componentDidMount() {
        const id = this.props.match.params.bookId;
        bookService.getBookById(id).then(res => {
            this.setState({ book: res })
        })
    }
    getPublishDate = () => {
        const { book } = this.state;
        const currYear = new Date().getFullYear();
        if (currYear - +book.publishedDate > 10) return `Published At: ${book.publishedDate} - Veteran Book`
        if (currYear - +book.publishedDate < 1) return `Published At: ${book.publishedDate} - New!`
    }
    getPageCount = () => {
        const { book } = this.state;
        if (+book.pageCount > 500) return `${book.pageCount} Pages - Long reading..`
        if (+book.pageCount > 200) return `${book.pageCount} Pages - Decent Reading..`
        if (+book.pageCount < 100) return `${book.pageCount} Pages - Light Reading..`
    }
    render() {
        const { book } = this.state
        if (!book) return <h1>Loading</h1>
        return (
            <div className="book-detail">
                <img src={book.thumbnail} />
                <div className="details">
                    <h2>{book.title}</h2>
                    <p>{book.subtitle}</p>
                    <p>{this.getPublishDate()}</p>
                    <p>{this.getPageCount()}</p>
                    <p>Author: {book.authors}</p>
                    <p>{book.description}</p>
                    <h3>${book.listPrice.amount}</h3>
                    <Link to="/books">Back</Link>
                </div>
            </div>

        )
    }
}