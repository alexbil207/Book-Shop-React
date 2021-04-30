import { bookService } from '../services/book-service.js'

export class BookFilter extends React.Component {
    state = {
        filters: [],
    }
    componentDidMount() {
        this.loadFilters();
    }
    loadFilters() {
        bookService.queryFilters().then(filters => {
            this.setState({ filters })
        })
    }
    render() {
        if (!this.state.filters) return <h1>Loading....</h1>
        return <div className='filters'>
            <input type="text" placeholder="Search Book By Name" />
            <label htmlFor="category">Category:
                <select id="category">
                    <option key="all"></option>
                    {this.state.filters.map(filter => {
                        return <option key={filter}>{filter}</option>
                    })}
                </select>
            </label>
            <label htmlFor="price">Price:
                <select id="price">
                    <option key="all"></option>
                    <option key="20">$20 - 0</option>
                    <option key="50">$50 - $20</option>
                    <option key="100">$100-$50</option>
                    <option key="+100">+$100</option>

                </select>
            </label>
        </div>

    }
}