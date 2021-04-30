import { BookReview } from './BookReview.jsx'

export function BookList({ books, setSelectedBook }) {
    return (
        <div className="book-grid">
            {books.map(book => { return <BookReview book={book} key={book.id} setSelectedBook={setSelectedBook} /> })}
        </div>
    )
}