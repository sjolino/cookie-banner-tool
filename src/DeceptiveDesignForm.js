import React, { useState } from 'react';

const DeceptiveDesignForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <div class="form-container">
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default DeceptiveDesignForm;