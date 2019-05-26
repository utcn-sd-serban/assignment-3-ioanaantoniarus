import questionModel from "../model/questionModel";

class SearchQuestionsPresenter {

    onSearchTag() {
        questionModel.filterByTag();
        questionModel.changeFilterProperty("filterTag", "");
        window.location.assign("#/searched-questions-list");
    }

    onSearchTitle() {
        questionModel.filterByTitle();
        questionModel.changeFilterProperty("filterTitle", "");
        window.location.assign("#/searched-questions-list");
    }

    onChange(property, value) {
        questionModel.changeFilterProperty(property, value);
    }

}

const searchQuestionsPresenter = new SearchQuestionsPresenter();

export default searchQuestionsPresenter;