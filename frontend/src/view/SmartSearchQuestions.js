import React, { Component } from "react";
import questionModel from "../model/questionModel";

import SearchQuestions from "./SearchQuestions";
import searchQuestionsPresenter from "../presenter/searchQuestionsPresenter";

const mapMpdelStateToComponentState = modelState => ({
    filterTitle: modelState.filterTitle,
    filterTag: modelState.filterTag
});

export default class SmartSearchQuestions extends Component {
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
            <SearchQuestions
                onSearchTitle={searchQuestionsPresenter.onSearchTitle}
                onSearchTag={searchQuestionsPresenter.onSearchTag}
                onChange={searchQuestionsPresenter.onChange}
                searchedQuestionTitle={this.state.filterTitle}
                searchedQuestionTag={this.state.filterTag} />
        );
    }

}