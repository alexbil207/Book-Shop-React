
export function BookReview({ book, setSelectedBook }) {
    return (
        <div className="book-card" key={book.id} >
            <img src={book.thumbnail} onClick={() => setSelectedBook(book)} />
            <p>{book.title}</p>
        </div>
    )
}