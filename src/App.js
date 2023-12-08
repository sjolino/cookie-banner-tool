import React from 'react';
import DeceptiveDesignForm from './DeceptiveDesignForm';

const App = () => {

  const handleFormSubmit = (url) => {
    console.log(`URL submitted: ${url}`);
    
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
					document.querySelector("#ItemPreview").src = "";
					document.querySelector("#text-rate").innerText = "";
					document.querySelector("#image-rate").innerText = "";
					console.log("No banner detected");
				}
			})
  };

  return (
    <div className="app">
      <div className="content" style={{display: "flex", flexDirection: "column", alignItems : "center", justifyContent : "center"}}>
        <h1>Cookie Banner Deceptive Design Detection Tool</h1>
        <br/>
        <DeceptiveDesignForm onSubmit={handleFormSubmit} />
        <br/>
        <img id="ItemPreview" src=""/>
        <div id="text-rate"></div>
        <div id="image-rate"></div>
      </div>
    </div>
  );
};

export default App;
