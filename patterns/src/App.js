import React, { Component } from 'react';
import About from "./function_component/About";
import Disclaimer from "./function_component/Disclaimer";
import AboutDes from "./destructuring_props/About";
import Customer from "./destructuring_props/Customer";
import Customers from "./spreading_props/Customers";
import Dialog from "./merge_destructured_props/Dialog";

class App extends Component {
  render() {
    const customers = [
      { id: 2, name: "Guy", email: "incognito@none.org" },
      { id: 666, name: "Evil", email: "evl@hell.hl" }
    ];
    return (
      <div className="App">
        <About author="Pello" />
        <Disclaimer />
        <hr />
        <AboutDes author="Pello" />
        <Customer name="John Doe" id="666" email="jdoe@nobody.org" />
        <Customer {...customers[0]} />
        <hr />
        <Customers data={customers} />
        <hr />
        <Dialog title="Default" content="This dialog has default content" />
        <Dialog className="warning" title="Warning!!!" content="Be careful" />
      </div>
    );
  }
}

export default App;
