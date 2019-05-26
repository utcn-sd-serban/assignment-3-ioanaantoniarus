import questionModel from "../model/questionModel";

class QuestionDetailsPresenter {

    onAddAnswer(id) {
        questionModel.addAnswer(questionModel.state.newAnswer.username, questionModel.state.newAnswer.text, id);
        questionModel.changeNewAnswerProperty("username", "");
        questionModel.changeNewAnswerProperty("text", "");
        window.location.assign("#/questions-list");
    }

    onChange(property, value) {
        questionModel.changeNewAnswerProperty(property, value);
    }

}

const questionDetailsPresenter = new QuestionDetailsPresenter();

export default questionDetailsPresenter;