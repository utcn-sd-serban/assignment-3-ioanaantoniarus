import React, { Component } from "react";
import questionModel from "../model/questionModel";
import createQuestionPresenter from "../presenter/createQuestionPresenter";
import CreateQuestion from "./CreateQuestion";

const mapMpdelStateToComponentState = modelState => ({
    title: modelState.newQuestion.title,
    username: modelState.newQuestion.username,
    text: modelState.newQuestion.text,
    tag: modelState.newQuestion.tag
});

export default class SmartCreateQuestion extends Component {
    constructor() {
        super();
        this.state = mapMpdelStateToComponentState(questionModel.state);
        this.listener = modelState => this.setState(mapMpdelStateToComponentState(modelState));
        questionModel.addListener("change", this.listener);
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateQuestion
                onCreate={createQuestionPresenter.onCreate}
                onChange={createQuestionPresenter.onChange}
                newQuestionTitle={this.state.title}
                newQuestionUsername={this.state.username}
                newQuestionText={this.state.text}
                newQuestionTag={this.state.tag}
                questions={this.state.questions} />
        );
    }

}