import React, { Component } from "react";
import FormField from "./FormField";
import StartGameBtn from "../StartGameBtn";

class Form extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            p1Name: props.p1Name,
            p2Name: props.p2Name,
            winningScore: props.winningScore,
            alternateEvery: props.alternateEvery,
        };

        this.handleP1Name = this.handleP1Name.bind(this);
        this.handleP2Name = this.handleP2Name.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handleAlternateEvery = this.handleAlternateEvery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleP1Name = (e) => {
        this.setState({
            p1Name: e.currentTarget.value
        });
    };

    handleP2Name = (e) => {
        this.setState({
            p2Name: e.currentTarget.value
        });
    };

    handleWinningScore = (e) => {
        this.setState({
            winningScore: +e.currentTarget.value
        });
    };

    handleAlternateEvery = (e) => {
        this.setState({
            alternateEvery: +e.currentTarget.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    };

    render() {
        
        const { p1Name, p2Name, winningScore, alternateEvery } = this.state;
        
        return (
            <form className="mt-4" onSubmit={ this.handleSubmit }>

                <FormField
                    name={ "p1Name" }
                    label={ "Player 1 Name" }
                    type={ "text" }
                    handleChange={ this.handleP1Name }
                    value={ p1Name } 
                />
                <FormField
                    name={ "p2Name" }
                    label={ "Player 2 Name" }
                    type={ "text" }
                    handleChange={ this.handleP2Name }
                    value={ p2Name }  
                />
                <FormField
                    name={ "winningScore" }
                    label={ "Winning Score" }
                    type={ "number" }
                    handleChange={ this.handleWinningScore }
                    value={ winningScore } 
                />
                <FormField
                    name={ "alternateEvery" }
                    label={ "Alternate Every" }
                    type={ "number" }
                    handleChange={ this.handleAlternateEvery }
                    value={ alternateEvery }  
                />
                
                <StartGameBtn
                    name={ "startGame" } 
                    label={ "Start Game" }
                />

            </form>
        )
    };
};

export default Form;