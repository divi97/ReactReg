import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Register from './components/registration/Register'
import List from './components/list/List'
import ViewEmployee from './components/view_employee/ViewEmployee'
import showResults from './utils/showResults'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={() => <List />} />
          <Route path='/register' render={() => <Register onSubmit={showResults} />} />
          <Route path='/view/:id' render={(props) => <ViewEmployee id={props.match.params.id}/>} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
