import React, { Component } from "react";
// import "../Product/Product.css";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue );
  };

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1,
    }, () => {
        this.handleCounterChange(this.state.order);
    });

  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      }, () => {
        this.handleCounterChange(this.state.order);
      } );
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?b=1&s=170667a&w=0&k=20&c=7dXJKCGrJLvgl7cso90N6QKQOumIr00J2aLNzR_zCM4="
            alt="product-img"
          />
        </div>
        <p className="product-title">Daging Ayam Berbumbu Rempah Rasa Kuda Laut</p>
        <p className="harga-title">Rp 400,000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" name="" value={this.state.order} id="" />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
