const { Link } = ReactRouterDOM;
import { bookService } from "../services/book-service.js";
import { ReviewDetails } from "../cmps/ReviewDetails.jsx";
import { AddReview } from "../cmps/AddReview.jsx";


export class BookReviews extends React.Component {
    state = {
        reviews: null,
        isReviewShown: false,
    }
    componentDidMount() {
        const { book } = this.props;
        this.setState({
            reviews: book.reviews,
        })
    }

    render() {
        const { isReviewShown, reviews } = this.state;
        const { book } = this.props;
        return (
            <div className="reviews-container">
                <Link to={`/book/addReview/${book.id}`}>Add Review</Link>
                {reviews && <ReviewDetails reviews={reviews} />}
                {isReviewShown && <AddReview id={book.id} />}
            </div>
        )
    }
}