import { EventEmitter } from "events";
import RestClient from "../rest/RestClient";

export let client;

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [{
                username: "ioana33",
                password: "ioana33"
            }, {
                username: "antonia000",
                password: "000"
            }],
            currentUser: {
                username: "",
                password: ""
            },
            route: "questions-list"
        };
    }

    validateUser() {
        client = new RestClient(this.state.currentUser.username, this.state.currentUser.password);
        this.emit("change", this.state);
    }

    changeUserProperty(property, value) {
        this.state = {
            ...this.state,
            currentUser: {
                ...this.state.currentUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const userModel = new UserModel();

export default userModel;