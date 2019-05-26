import React, { Component } from "react";
import QuestionsList from "./QuestionsList";
import questionModel from "../model/questionModel";
import questionsListPresenter from "../presenter/questionsListPresenter";

const mapMpdelStateToComponentState = modelState => ({
    questions: modelState.questions
});

export default class SmartQuestionsList extends Component {
    constructor() {
        super();
        this.state = mapMpdelStateToComponentState(questionModel.state);
        this.listener = modelState => this.setState(mapMpdelStateToComponentState(modelState));
        questionModel.addListener("change", this.listener);
        questionsListPresenter.onInit();
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <QuestionsList
                onViewDetails={questionsListPresenter.onViewDetails}
                onCreateQuestion={questionsListPresenter.onCreateQuestion}
                onSearchQuestions={questionsListPresenter.onSearchQuestions}
                questions={this.state.questions} />
        );
    }

}