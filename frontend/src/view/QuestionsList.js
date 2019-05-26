import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const QuestionsList = ({ questions, title, onCreateQuestion, onViewDetails, onSearchQuestions }) => (
    <div className="jumbotron text-center">
        <h2 className="bg-info text-white">{title || "Questions"}</h2>
        <table className="table table-hover">
            <thead className="thead-light">
                <tr>
                    <th>Id</th>
                    <th> Title </th>
                    <th> User </th>
                    <th> Question </th>
                    <th> Tags </th>
                    <th> Date </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.id}</td>
                            <td>{question.title}</td>
                            <td>{question.username}</td>
                            <td>{question.text}</td>
                            <td>{question.tags}</td>
                            <td>{question.date}</td>
                            <td><button type="button" className="btn btn-info" onClick={() => onViewDetails(index)}>View Details</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div class="btn-group">
            <button type="button" className="btn btn-primary" onClick={onCreateQuestion}>Add new question</button>
            <button type="button" className="btn btn-primary" onClick={onSearchQuestions}>Search questions</button>
        </div>

    </div>
);

export default QuestionsList;