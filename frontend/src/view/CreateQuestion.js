import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const CreateQuestion = ({ newQuestionTitle, newQuestionUsername, newQuestionText, newQuestionTag, onCreate, onChange }) => (
    <div className="jumbotron text-center">
        <h2 className="bg-warning text-white">Add Question</h2>
        <div>
            <label>Title: </label>
            <input type="text" className="form-control" value={newQuestionTitle} onChange={e => onChange("title", e.target.value)} />
            <br />
            <label>Username: </label>
            <input type="text" className="form-control" value={newQuestionUsername} onChange={e => onChange("username", e.target.value)} />
            <br />
            <label>Question: </label>
            <input type="text" className="form-control" value={newQuestionText} onChange={e => onChange("text", e.target.value)} />
            <br />
            <label>Tag: </label>
            <input type="text" className="form-control" value={newQuestionTag} onChange={e => onChange("tag", e.target.value)} />
            <br />
            <button type="button" className="btn btn-warning" onClick={onCreate}>Create!</button>
        </div>
    </div>
);

export default CreateQuestion;