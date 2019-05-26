import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import SmartQuestionsList from './view/SmartQuestionsList';
import SmartCreateQuestion from './view/SmartCreateQuestion';
import SmartQuestionDetails from './view/SmartQuestionDetails';
import SmartLogin from './view/SmartLogin';
import SmartSearchQuestions from './view/SmartSearchQuestions';
import SmartSearchedQuestionsList from './view/SmartSearchedQuestionsList';

const App = () => (
  <div className="App">
    <HashRouter>
      <Switch>
        <Route exact={true} component={SmartLogin} path="/" />
        <Route exact={true} component={SmartQuestionsList} path="/questions-list" />
        <Route exact={true} component={SmartCreateQuestion} path="/create-question" />
        <Route exact={true} component={SmartQuestionDetails} path="/question-details/:index" />"#/search-questions"
        <Route exact={true} component={SmartSearchQuestions} path="/search-questions" />
        <Route exact={true} component={SmartSearchedQuestionsList} path="/searched-questions-list" />
      </Switch>
    </HashRouter>
  </div>
);


export default App;
