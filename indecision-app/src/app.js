class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : ["First", "Second", "Third"]
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({options:[]}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState)=>({options: prevState.options.filter((option)=> optionToRemove !== option)}));
    }

    makeDecision () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {

        if (!option){
            return "Enter valid value to add";
        }
        else if (this.state.options.indexOf(option) > -1 ){
            return "This option already exist";
        }

        this.setState((prevState) => ({ options: [...prevState.options, option]}));
    }

    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hand of a computer";
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    makeDecision={this.makeDecision}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
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
    render() {
        return (
            <div>
                <button
                    onClick={this.props.makeDecision}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
};

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>{`Number of options: ${this.props.options.length}`}</p>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                <ol>
                {this.props.options.map(option => <Option Optiontext={option} key={option} handleDeleteOption={this.props.handleDeleteOption}/>)}
                </ol>
            </div>
        );
    }
};

class Option extends React.Component {
    render() {
        return (
            <li>
                {this.props.Optiontext}
                <button onClick={() => {this.props.handleDeleteOption(this.props.Optiontext)}}>Remove</button>
            </li>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }

    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=> ({error: error}));
        event.target.elements.option.value ='';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));