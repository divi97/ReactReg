import React from 'react';
import Register from './components/registration/Register'
import showResults from './showResults'

function App() {
  return (
    <div className="App">
      <div>
        <h2>Registration Form</h2>
          <Register onSubmit = {showResults} />
      </div>
    </div>
  );
}

export default App;
