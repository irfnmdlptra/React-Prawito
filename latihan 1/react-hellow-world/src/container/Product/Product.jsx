import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
    name: 'ippams'
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="https://o.remove.bg/downloads/291f1a05-f44c-4117-a6f5-fdd81e186f17/th-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="troley">
            <img
              src="https://o.remove.bg/downloads/39276670-d79e-4b9f-a5a1-aaa15ce54214/th-removebg-preview.png"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
