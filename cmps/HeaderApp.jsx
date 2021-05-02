
const { NavLink } = ReactRouterDOM;

export class HeaderApp extends React.Component {
    state = {
        isShown: false
    }

    onToggle = () => {
        this.setState(prevState => ({ ...prevState, isShown: !prevState.isShown }))
    }

    render() {
        const { isShown } = this.state;
        return (
            <nav className="app header">
                <div className="logo">
                    <h1>Book/Store</h1>
                </div>
                <div className={`nav-btns ${isShown && 'show'}`}>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/books">Books</NavLink>
                </div>
                <button className="toggleMenu hidden" onClick={this.onToggle}>☰</button>
            </nav>
        )
    }
}