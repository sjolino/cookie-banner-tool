import React from 'react';
import DeceptiveDesignForm from './DeceptiveDesignForm';

const App = () => {

  const handleFormSubmit = (url) => {
    console.log(`URL submitted: ${url}`);
    document.querySelector("#url-text").innerText="URL Submitted: " + url;
    
    let form = new FormData();
    form.append("link", url);
    
    fetch("http://localhost:8080/analyze", {
			"method": "POST",
			"mode": 'cors',
			"body": form
		})
			.then(b => b.json())
			.then(a => {
				if (a["code"] === '1') {
					document.querySelector("#ItemPreview").src = "data:image/png;base64," + a["data"];
					document.querySelector("#text-rate").innerText = "Text rating: " + a["tRate"];
					document.querySelector("#image-rate").innerText = "Options weight: " + a["iRate"];
				}
				else {
          document.querySelector("#no-banner-text").innerText = "No banner detected.";
					document.querySelector("#ItemPreview").src = "";
					document.querySelector("#text-rate").innerText = "";
					document.querySelector("#image-rate").innerText = "";
					console.log("No banner detected");
				}
			})
  };

  return (
    <div className="app">
      <div className="content">
        <h1>Insert Name</h1>
        <h4> A Cookie Banner Deceptive Design Detection Tool</h4>
        <br/>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Pellentesque et risus et augue ornare vestibulum. 
          Pellentesque velit augue, vehicula eget efficitur ut, accumsan sit amet dui. 
          In hac habitasse platea dictumst. Fusce quis eros sed nisi fermentum dignissim. 
          Vestibulum pretium lacus non sapien maximus, vel finibus ipsum volutpat. 
        </p>
        <br/>
        <DeceptiveDesignForm onSubmit={handleFormSubmit} />
        <br/>
        <div class="results-container">
          <div class="text-results" id="url-text"></div>
          <div class="text-results" id="no-banner-text"></div>
          <img alt="" id="ItemPreview" src=""/>
          <div class="text-results" id="text-rate"></div>
          <div class="text-results" id="image-rate"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
