import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './App.css';



class Category extends Component {
  render() {
    const category = this.props.match.params.category;
    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>Category component</h1>
            </div>
            <div>
                {category !== 'fail' ?
                    (
                        <div>This is the category page: {category}</div>
                    ) : (
                        <Redirect to="/404" />
                    )
                }
            </div>
        </div>
      </div>
    );
  }
}
export default Category;