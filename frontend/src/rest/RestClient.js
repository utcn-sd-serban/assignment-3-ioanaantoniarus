const BASE_URL = "http://localhost:8080";

export default class RestClient {
    constructor(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);

    }

    checkUser(username, password) {
        fetch(BASE_URL + "/login", {
            method: "GET",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Authorization": this.authorization
            }
        }).then(() => { return true })
            .catch(() => { return false });
    }

    loadAllQuestions() {
        return fetch(BASE_URL + "/questions", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    createQuestion(title, username, text, tags) {
        return fetch(BASE_URL + "/questions", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                username: username,
                text: text,
                tags: tags
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    loadFilterTitle(title) {
        return fetch(BASE_URL + "/questions/filter-title?title=" + title, {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    loadFilterTag(tag) {
        return fetch(BASE_URL + "/questions/filter-tag?tag=" + tag, {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    loadQuestionAnswers(id) {
        return fetch(BASE_URL + "/questions/" + id + "/answers", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    createAnswer(username, text, id) {
        return fetch(BASE_URL + "/answers/" + id, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                text: text
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

}