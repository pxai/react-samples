import React, { Component } from 'react';
import About from "./function_component/About";
import Disclaimer from "./function_component/Disclaimer";
import AboutDes from "./destructuring_props/About";
import Customer from "./destructuring_props/Customer";
import Customers from "./spreading_props/Customers";
import Dialog from "./merge_destructured_props/Dialog";
import { Footer1, Footer2, Footer3 } from "./conditional_rendering";
import RenderChildren from "./children_types/RenderChildren";
import RenderArrays from "./array_children/RenderArrays";
import InputField from "./function_children_render_prop/InputField";

class App extends Component {
  render() {
    const customers = [
      { id: 2, name: "Guy", email: "incognito@none.org" },
      { id: 666, name: "Evil", email: "evl@hell.hl" }
    ];

    const MyInputField = ({ name, value, children }) => (
      <InputField>{(name, value) => (children)}</InputField>
    );

    return (
      <div className="App">
        <About author="Pello" />
        <Disclaimer />
        <hr />
        <AboutDes author="Pello" />
        <Customer name="John Doe" id="666" email="jdoe@nobody.org" />
        <Customer {...customers[0]} />
        <Footer1 data={customers} />
        <Footer1 data={[]} />
        <Footer1 data={null} />
        <hr />
        <Customers data={customers} />
        <Footer2 data={customers} />
        <Footer2 data={[]} />
        <Footer2 data={null} />
        <hr />
        <Footer3 data={customers} />
        <Footer3 data={[]} />
        <Footer3 data={null} />
        <hr />
        <Dialog title="Default" content="This dialog has default content" />
        <Dialog className="warning" title="Warning!!!" content="Be careful" />
        <hr />
        <RenderChildren words={["This"," is ", <b>Cool</b>]} />
        <hr />
        <RenderArrays customers={customers} />
        <hr />
        <InputField name="email" value="any@mail.com" />
      </div>
    );
  }
}

export default App;
