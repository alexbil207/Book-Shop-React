const { Link } = ReactRouterDOM;


export function Home() {
    return (
        <section className="hero">
            <h2>Welcome To Our Book Store</h2>
            <Link to="/books">Explore</Link>
        </section>
    )
}