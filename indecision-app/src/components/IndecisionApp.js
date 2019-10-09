import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {

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

    UNSAFE_componentWillMount() {
        console.log("IndecesionApp will mount!");
    }

    componentDidMount() {
        this.setState(() => ({options: JSON.parse(localStorage.getItem('options')) || []}));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount() {
        console.log("IndecesionApp will unmount!");
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
                <Header subTitle={subTitle}/>
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