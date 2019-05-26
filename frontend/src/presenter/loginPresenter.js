import userModel from "../model/userModel";

class LoginPresenter {

    onLogin(loginUsername, loginPassword) {
        /*if (userModel.validateUser(loginUsername, loginPassword) === true) {
            userModel.changeUserProperty("username", "");
            userModel.changeUserProperty("password", "");
            window.location.assign("#/questions-list");
        } else {
            userModel.changeUserProperty("username", "");
            userModel.changeUserProperty("password", "");
        }*/
        userModel.validateUser();
        userModel.changeUserProperty("username", "");
        userModel.changeUserProperty("password", "");
        window.location.assign("#/questions-list");
    }

    onChange(property, value) {
        userModel.changeUserProperty(property, value);
    }

}

const loginPresenter = new LoginPresenter();

export default loginPresenter;