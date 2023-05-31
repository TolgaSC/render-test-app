import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [headline, setHeadline] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/api/test")
      .then((resp) => resp.json())
      .then((data) => {
        setHeadline(data.headline);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{headline}</h1>
      </header>
    </div>
  );
}

export default App;
