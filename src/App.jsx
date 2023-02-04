import React from "react";
import Form from "./components/Form";

const userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={!userIsRegistered} />
    </div>
  );
}

export default App;
