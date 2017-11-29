import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';



class Sample extends Component {

    constructor (props) {
        super(props);
        this.state = {redirectToDefault: false};
    }

    goBack = () => {
        this.setState({redirectToDefault: true});
    }

  render() {
    const id = this.props.match.params.id;
    const name = this.props.match.params.name;

    if (this.state.redirectToDefault) {
          return <Redirect push to="/" />;
    }

    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>Sample component</h1>
            </div>
            <div>
               Parameters passed: {id} and {name}
                { id === '0' ?
                    (
                        <Redirect to="/404" />
                    ) : (
                        <div>ID is not 0</div>
                    )
                }
                <button onClick={this.goBack}>Go back</button>
            </div>
        </div>
      </div>
    );
  }
}
export default Sample;