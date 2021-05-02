
const { NavLink } = ReactRouterDOM;

export class HeaderApp extends React.Component {
    state = {
        navBtns: 'nav-btns',
    }

    btnClick = () => {
        if (this.state.navBtns.includes('show')) this.setState({ navBtns: 'nav-btns' });
        else this.setState({ navBtns: 'nav-btns show' });
    }

    render() {
        const { navBtns } = this.state;
        return (
            <nav className="app header">
                <div className="logo">
                    <h1>Book/Store</h1>
                </div>
                <div className={navBtns}>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/books">Books</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
                <button className="toggleMenu hidden" onClick={this.btnClick}>☰</button>
            </nav>
        )
    }
}