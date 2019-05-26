import React, { Component } from "react";

import questionModel from "../model/questionModel";
import QuestionDetails from "./QuestionDetails";
import questionDetailsPresenter from "../presenter/questionDetailsPresenter";



const mapMpdelStateToComponentState = (modelState, props) => ({
    question: modelState.questions[props.match.params.index],
    answers: modelState.answers,
    newAnswerUsername: modelState.newAnswer.username,
    newAnswerText: modelState.newAnswer.text
})

export default class SmartQuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = mapMpdelStateToComponentState(questionModel.state, props);
        this.listener = modelState => this.setState(mapMpdelStateToComponentState(modelState, this.props));
        questionModel.addListener("change", this.listener);
    }

    componentDidUpdate(prev) {
        if (prev.match.params.index !== this.props.match.params.index) {
            this.setState(mapMpdelStateToComponentState(questionModel.state, this.props));
        }
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <QuestionDetails
                id={this.state.question.id}
                title={this.state.question.title}
                username={this.state.question.username}
                text={this.state.question.text}
                tags={this.state.question.tags}
                date={this.state.question.date}
                answers={this.state.answers}
                newAnswerText={this.state.newAnswerText}
                newAnswerUsername={this.state.newAnswerUsername}
                onChange={questionDetailsPresenter.onChange}
                onAddAnswer={questionDetailsPresenter.onAddAnswer} />
        );
    }

}