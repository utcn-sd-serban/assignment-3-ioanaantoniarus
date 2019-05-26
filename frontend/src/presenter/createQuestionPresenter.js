import questionModel from "../model/questionModel";

class CreateQuestionPresenter {

    onCreate() {
        questionModel.addQuestion(questionModel.state.newQuestion.title, questionModel.state.newQuestion.username,
            questionModel.state.newQuestion.text, questionModel.state.newQuestion.tag)
            .then(() => {
                questionModel.changeNewQuestionProperty("title", "");
                questionModel.changeNewQuestionProperty("username", "");
                questionModel.changeNewQuestionProperty("text", "");
                questionModel.changeNewQuestionProperty("tag", "");
                window.location.assign("#/questions-list");
            });
    }

    onChange(property, value) {
        questionModel.changeNewQuestionProperty(property, value);
    }
}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;