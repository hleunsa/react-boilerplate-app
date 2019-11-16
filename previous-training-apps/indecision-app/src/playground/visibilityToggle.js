class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible : false
        };
    }

    handleToggleVisibility() {
        this.setState(({visible})=>{
            return {
                visible: !visible
            };
        });
    }

    render() {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visible ? "Hide details": "Show details"}</button>
            {this.state.visible && (<div><p>{this.props.details}</p></div>)}
        </div>
    );
    }
}
const details = "Here are some details";
ReactDOM.render(<VisibilityToggle details={details}/>, document.getElementById('app'));