import React, { Component } from "react";
import Favorite from '@material-ui/icons/Favorite';
import "../Css/childProduct.css";


class childProduct extends Component {
    constructor() {
        super();
        this.state = {
          fav: true,
        };
      }
    
    render() {
    
        console.log(this.state.fav)

    const favorite = this.state.fav;
    const dateDay = new Date().getDay();
    const dateMonth = new Date().getMonth();
    return (

<div className="card">
    
        <img
          className="card-img-top"
          src={this.props.imgSrc}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.price}</h5>
          <p className="card-text">
            {this.props.name} <span onClick={() => this.setState({fav: !favorite}) } className={favorite ? "no-fav":"fav"} >{<Favorite />}</span>
          </p>
          <p className="card-location">
            {this.props.location}
            {/* <span>
              {dateDay}/{dateMonth}
            </span> */}
          </p>
        </div>
      </div>
    );
  }
}

export default childProduct;
