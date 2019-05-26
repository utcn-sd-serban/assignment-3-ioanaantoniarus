import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const SearchQuestions = ({ searchedQuestionTitle, searchedQuestionTag, onSearchTitle, onSearchTag, onChange }) => (
    <div className="jumbotron text-center">
        <h2 className="bg-warning text-white">Search Questions</h2>
        <div>
            <label>Search by title: </label>
            <input type="text" className="form-control" value={searchedQuestionTitle} onChange={e => onChange("filterTitle", e.target.value)} />
            <br />
            <button type="button" className="btn btn-warning" onClick={onSearchTitle}>Search Title!</button>
            <br />
            <label>Search by tag: </label>
            <input type="text" className="form-control" value={searchedQuestionTag} onChange={e => onChange("filterTag", e.target.value)} />
            <br />
            <button type="button" className="btn btn-warning" onClick={onSearchTag}>Search Tag!</button>
        </div>
    </div>
);

export default SearchQuestions;