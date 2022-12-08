import React from "react";
import "./styles.css";
import Chart from "./chart";

 function App() {
  return (
    <div className="App">
      <div className="header">
        React Employee Hierarchy Chart
        <span className="follow">
          <a href="https://twitter.com/salimdinesh12">
            <img
              alt="Follow @dineshkumar"
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            />
            Follow @dineshkumar
          </a>
        </span>
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}

export default App
