class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hand of a computer";
        const options = ["First", "Second", "Third"];
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
};

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
};

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        alert('removeAll');
    }
    render() {
        return (
            <div>
                <p>{`Number of options: ${this.props.options.length}`}</p>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <ol>
                {this.props.options.map(option => <Option Optiontext={option} key={option}/>)}
                </ol>
            </div>
        );
    }
};

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.Optiontext}</li>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            alert(option)
        }

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));