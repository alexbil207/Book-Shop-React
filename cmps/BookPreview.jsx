const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {
    return (
        <Link to={`/books/${book.id}`}>
            <div className="book-card" key={book.id} >
                <img src={book.thumbnail} />
                <p>{book.title}</p>
            </div>
        </Link>
    )
}

