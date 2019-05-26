import questionModel from "../model/questionModel";


class QuestionsListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        questionModel.loadAnswers(index)
        .then(()=>{
            window.location.assign("#/question-details/" + index);
        });
    }

    onSearchQuestions() {
        window.location.assign("#/search-questions");
    }

    onInit() {
        questionModel.loadQuestions();
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;