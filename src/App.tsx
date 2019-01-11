import React, { Component } from "react";
import logo from "./logo.svg";
import { FormComponent, FormContainer } from "react-authorize-net";

let clientKey: string
let apiLoginId: string

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer
          environment="sandbox"
          amount={23}
          component={FormComponent}
          clientKey={clientKey}
          apiLoginId={apiLoginId}
        />
      </div>
    );
  }
}

export default App;
