import React, { Component } from "react";

import Login from "./Login";
import loginPresenter from "../presenter/loginPresenter";
import userModel from "../model/userModel";

const mapMpdelStateToComponentState = modelState => ({
    username: modelState.currentUser.username,
    password: modelState.currentUser.password
});

export default class SmartLogin extends Component {
    constructor() {
        super();
        this.state = mapMpdelStateToComponentState(userModel.state);
        this.listener = modelState => this.setState(mapMpdelStateToComponentState(modelState));
        userModel.addListener("change", this.listener);
    }

    componentWillUnmount() {
        userModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <Login
                onLogin={loginPresenter.onLogin}
                onChange={loginPresenter.onChange}
                loginUsername={this.state.username}
                loginPassword={this.state.password} />
        );
    }

}