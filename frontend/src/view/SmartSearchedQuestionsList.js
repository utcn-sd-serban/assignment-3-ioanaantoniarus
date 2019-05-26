import React, { Component } from "react";

import questionModel from "../model/questionModel";
import SearchedQuestionsList from "./SearchedQuestionsList";

const mapMpdelStateToComponentState = modelState => ({
    filteredQuestions: modelState.filteredQuestions
});

export default class SmartSearchedQuestionsList extends Component {
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
            <SearchedQuestionsList
                filteredQuestions={this.state.filteredQuestions} />
        );
    }

}