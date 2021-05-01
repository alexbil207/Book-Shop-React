
export class BookFilter extends React.Component {
    state = {
        filterBy: {
            bookName: '',
            price: ''
        }
    }


    handleNameChange = (ev) => {
        this.setState({
            filterBy: {
                bookName: ev.target.value,
            }
        }, this.filterChange)
    }
    handlePriceChange = (ev) => {
        this.setState({
            filterBy: {
                price: ev.target.value
            }
        }, this.filterChange)
    }

    filterChange = () => {
        this.props.setFilterBy(this.state.filterBy)
    }

    render() {
        return <div className='filters'>
            <input type="text" placeholder="Search Book By Name" onChange={this.handleNameChange} />
            <label htmlFor="price">Price:
                <select id="price" onChange={this.handlePriceChange}>
                    <option key="all" value="all"></option>
                    <option key="20" value="20">$20 - 0</option>
                    <option key="50" value="50">$50 - $20</option>
                    <option key="100" value="100">$100-$50</option>
                    <option key="+100" value="101">+$100</option>
                </select>
            </label>
        </div>
    }

}