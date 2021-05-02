const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, Link } = ReactRouterDOM;

import { HeaderApp } from './cmps/HeaderApp.jsx'
import { BookApp } from './pages/BookApp.jsx'
import { FooterApp } from './cmps/FooterApp.jsx'


export function App() {
    return (
        <Router>
            <header>
                <HeaderApp />
            </header>
            <main className="app">
                <Switch>
                    <BookApp />
                </Switch>
            </main>
            <footer>
                <FooterApp />
            </footer>
        </Router>
    )
}


