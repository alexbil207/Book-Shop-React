

export function BookDetails({ book, setSelectedBook }) {
    const getPublishDate = (book) => {
        const currYear = new Date().getFullYear();
        if (currYear - +book.publishedDate > 10) return `Published At: ${book.publishedDate} - Veteran Book`
        if (currYear - +book.publishedDate < 1) return `Published At: ${book.publishedDate} - New!`
    }
    const getPageCount = (book) => {
        if (+book.pageCount > 500) return `${book.pageCount} Pages - Long reading..`
        if (+book.pageCount > 200) return `${book.pageCount} Pages - Decent Reading..`
        if (+book.pageCount < 100) return `${book.pageCount} Pages - Light Reading..`
    }
    return (
        <div className="book-detail">
            <img src={book.thumbnail} />
            <div className="details">
                <h2>{book.title}</h2>
                <p>{book.subtitle}</p>
                <p>{getPublishDate(book)}</p>
                <p>{getPageCount(book)}</p>
                <p>Author: {book.authors}</p>
                <p>{book.description}</p>
                <h3>${book.listPrice.amount}</h3>
                <button onClick={() => setSelectedBook(null)}>Back</button>
            </div>
        </div>

    )
}