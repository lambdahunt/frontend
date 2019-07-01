import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(
  faCircleNotch,
  faTwitter,
  // more icons can go here as needed
);

function App() {
  return (
    <>
      SITE CONTENT GOES HERE
      <Router />
    </>
  );
}

export default App;
