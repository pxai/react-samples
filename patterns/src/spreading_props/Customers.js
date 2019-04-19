import React, { Component } from 'react';
import Customer from "../destructuring_props/Customer";

class Customers extends Component {
  render() {
    return <div className="App">
        {
            this.props.data.map( ticket => 
                <Customer {...ticket} />
            )
        }
      </div>;
  }
}

export default Customers;