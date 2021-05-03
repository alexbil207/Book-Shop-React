import { bookService } from "../services/book-service.js";

export class AddReview extends React.Component {
    state = {
        fullName: null,
        text: null
    }
    componentDidMount() {
        this.nameInput.focus();
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ ...prevState, [field]: value }))
    }

    submitReview = (ev) => {
        ev.preventDefault();
        const id = this.props.match.params.bookId;
        bookService.createReview(this.state, id);
        this.props.history.push(`/books/${id}`)
    }
    render() {
        return (
            <form className="add-review-container" onSubmit={this.submitReview}>
                <input type="text" name="fullName" ref={(input) => { this.nameInput = input; }}
                    placeholder="Enter Your Full Name" onChange={this.handleChange} />
                <textarea name="text" cols="30" rows="10" placeholder="Enter Review" onChange={this.handleChange}></textarea>
                <button>Submit</button>
            </form>

        )
    }


}