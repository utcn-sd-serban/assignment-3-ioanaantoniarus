import { EventEmitter } from "events";
import { client } from "./userModel";
import WebSocketListener from "../ws/WebSocketListener";
//import RestClient from "../rest/RestClient";

const listener = new WebSocketListener("ioana33", "ioana33");
//const client=new RestClient("ioana33","ioana33");

class QuestionModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [],
            newQuestion: {
                id: "",
                title: "",
                username: "",
                text: "",
                tags: "",
                date: ""
            },
            answers: [],
            newAnswer: {
                username: "",
                text: "",
                date: ""
            },
            filteredQuestions: [],
            filterTitle: "",
            filterTag: ""
        };
    }

    loadQuestions() {
        return client.loadAllQuestions().then(questions => {
            this.state = { ...this.state, questions: questions };
            this.emit("change", this.state);
        });
    }

    getQuestionId(index) {
        return this.state.questions[index].id;
    }

    loadAnswers(index) {
        var id = this.getQuestionId(index);
        return client.loadQuestionAnswers(id).then(answers => {
            this.state = { ...this.state, answers: answers };
            this.emit("change", this.state);
        });
    }

    getDate() {
        var date = new Date();
        return date.toLocaleString();
    }

    changeFilteredQuestions() {
        this.state = {
            ...this.state,
            filteredQuestions: []
        };
        this.emit("change", this.state);
    }

    filterByTitle() {
        return client.loadFilterTitle(this.state.filterTitle).then(filteredQuestions => {
            this.state = { ...this.state, filteredQuestions: filteredQuestions };
            this.emit("change", this.state);
        });
    }

    filterByTag() {
        return client.loadFilterTag(this.state.filterTag).then(filteredQuestions => {
            this.state = { ...this.state, filteredQuestions: filteredQuestions };
            this.emit("change", this.state);
        });
    }

    addQuestion(title, username, text, tags) {
        return client.createQuestion(title, username, text, tags)
            .then(question => this.appendQuestion(question));
    }

    appendQuestion(question) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([question])
        };
        this.emit("change", this.state);
    }

    getQuestionIndex(questionTitle, questionUsername, questionText) {
        var index;
        var i;
        for (i = 0; i < this.state.questions.length; i++) {
            if (this.state.questions[i].title === questionTitle && this.state.questions[i].username === questionUsername && this.state.questions[i].text === questionText) {
                index = i;
            }
        }
        return index;
    }

    addAnswer(username, text, id) {
        return client.createAnswer(username, text, id)
            .then(answer => {
                this.state = {
                    ...this.state,
                    answers: this.state.answers.concat([answer])
                };
                this.emit("change", this.state);
            });
    }


    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeNewAnswerProperty(property, value) {
        this.state = {
            ...this.state,
            newAnswer: {
                ...this.state.newAnswer,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeFilterProperty(property, value) {
        this.state = {
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }
}

const questionModel = new QuestionModel();

listener.on("event", event => {
    if (event.type === "QUESTION_CREATED") {
        questionModel.appendQuestion(event.question);
    }
});

export default questionModel;