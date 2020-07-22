import React from 'react';
import Register from './components/registration/Register'
// import List from './components/list/List'
import showResults from './utils/showResults'

function App() {
  return (
    <div className="App">
      {/* <List /> */}
      <Register onSubmit={showResults} />
    </div>
  );
}

export default App;
