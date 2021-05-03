
export class TextLength extends React.Component {
    state = {
        isFullyShown: false
    }

    render() {
        const { isFullyShown } = this.state;
        const { text } = this.props;
        return <div className="description">
            <h3>description:</h3>
            <p>{isFullyShown ? text : text.slice(0, 99)}</p>
            <button onClick={() => this.setState({ isFullyShown: !isFullyShown })}>
                {isFullyShown ? '...Read Less' : '...Read More'}</button>
        </div>
    }
}