import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Login = ({ loginUsername, loginPassword, onChange, onLogin }) => (
    <div className="jumbotron text-center">
        <h2 className="bg-warning text-white">Login</h2>
        <div>
            <label>Username: </label>
            <input value={loginUsername} onChange={e => onChange("username", e.target.value)} />
            <br />
            <label>Password: </label>
            <input value={loginPassword} onChange={e => onChange("password", e.target.value)} />
            <br />
            <button type="button" className="btn btn-warning" onClick={() => onLogin(loginUsername, loginPassword)}>Login</button>
        </div>
    </div>
);

export default Login;