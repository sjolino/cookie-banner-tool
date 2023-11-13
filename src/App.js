import React from 'react';
import DeceptiveDesignForm from './DeceptiveDesignForm';

const App = () => {
  const handleFormSubmit = (url) => {
    console.log(`URL submitted: ${url}`);
  };

  return (
    <div className="app">
      <div className="content">
        <h1>Cookie Banner Deceptive Design Detection Tool</h1>
        <br/>
        <DeceptiveDesignForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default App;
