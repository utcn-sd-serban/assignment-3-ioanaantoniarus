import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const QuestionDetails = ({ id, title, username, text, tags, date, answers, newAnswerUsername, newAnswerText, onChange, onAddAnswer }) => (
    <div className="jumbotron text-center">
        <h2 className="bg-danger text-white">Question</h2>
        <label>Title: </label>
        <span>{title}</span>
        <br />
        <label>Username: </label>
        <span>{username}</span>
        <br />
        <label>Text: </label>
        <span>{text}</span>
        <br />
        <label>Tag: </label>
        <span>{tags}</span>
        <br />
        <label>Date: </label>
        <span>{date}</span>
        <br />
        <br />
        <h2 className="bg-danger text-white">Answers</h2>
        <table className="table-active">
            <thead>
                <tr>
                    <th> User </th>
                    <th> Answer </th>
                    <th> Date </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    answers.map((answer, index) => (
                        <tr key={index}>
                            <td>{answer.username}</td>
                            <td>{answer.text}</td>
                            <td>{answer.date}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />
        <h2>Add an answer</h2>
        <label>User: </label>
        <input value={newAnswerUsername} onChange={e => onChange("username", e.target.value)} />
        <br />
        <label>Answer: </label>
        <input value={newAnswerText} onChange={e => onChange("text", e.target.value)} />
        <br />
        <button type="button" className="btn btn-danger" onClick={() => onAddAnswer(id)}>Add Answer!</button>
    </div>

);


export default QuestionDetails;