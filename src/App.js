import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// import LoginPage from './views/LoginPage';

library.add(
  faCircleNotch,
  faTwitter,
  // more icons can go here as needed
);

function App() {
  return (
    <>
      <h1>APP CONTENT GOES HERE</h1>
      <Router>
        {/* <Route exact path='/login' component={LoginPage} /> */}
      </Router>
    </>
  );
}

export default App;
