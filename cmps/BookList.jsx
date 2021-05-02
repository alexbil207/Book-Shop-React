import { BookReview } from './BookReview.jsx'

export function BookList({ books }) {
    return (
        <div className="book-grid">
            {books.map(book => { return <BookReview book={book} key={book.id} /> })}
        </div>
    )
}