import "./App.css";

import React from "react";
import Main from "./component/Main";
import Side1 from "./component/Side1";
import Side2 from "./component/Side2";
function App() {

  return (
    <div className="container">
      <Side1 />
      <Side2 />
      <Main />
    </div>
  );
}

export default App;
