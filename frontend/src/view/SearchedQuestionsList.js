import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const SearchedQuestionsList = ({ filteredQuestions, title, onViewDetails }) => (
    <div className="jumbotron text-center">
        <h2 className="bg-warning text-white">{title || "Questions"}</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th> Title </th>
                    <th> User </th>
                    <th> Question </th>
                    <th> Tag </th>
                    <th> Date </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredQuestions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.title}</td>
                            <td>{question.username}</td>
                            <td>{question.text}</td>
                            <td>{question.tags}</td>
                            <td>{question.date}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
);

export default SearchedQuestionsList;