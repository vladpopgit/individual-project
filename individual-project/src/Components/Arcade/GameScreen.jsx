import React from "react";
import { Hangman } from "./Hangman/Hangman";
import "./GameScreen.css";

export class GameScreen extends React.Component {
    render() {
        if (this.props.selectedGame === null) {
            return (
                <div className="gameScreenContainer">
                    <h1>Choose a game!</h1>
                </div>
            )
        } else if (this.props.selectedGame === "hangman") {
            return (
                <Hangman></Hangman>
            )
        } else if (this.props.selectedGame === "rockPaperScissors") {
            return (
                <div className="gameScreenContainer">
                    <p>You are playing Rock Paper Scisors</p>
                </div>
            )
        }
    }
}