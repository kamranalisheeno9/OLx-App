import React, { Component } from "react";
import ArrowDropdown from "../images/dropdown.png";

import "../Css/navbar.css";

// show_Catagory = () =>{

// }

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    console.log(this.state.show);
    const show_catagory = this.state.show;
    return (
      <div className="container-fluid navbar-background">
        <div className="container  ">
          <div className="row navbar-container">
            <div className="col-xl-2">
              <a
                className="catagory"
                onClick={() => this.setState({ show: !show_catagory })}
              >
                ALL CATAGORIES{" "}
                <span
                  className={
                    show_catagory
                      ? "navbar-arrow catagory-rotate"
                      : "navbar-arrow catagory-rotate-2"
                  }
                >
                  {" "}
                  <img src={ArrowDropdown} alt="" />
                </span>{" "}
              </a>
            </div>
            <div className="col-xl-8 list-catagory">
              <a href="">Car</a>
              <a href="">Mobile</a>
              <a href="">Bike</a>
              <a href="">Laptop</a>
              <a href="">Camera</a>
            </div>
          </div>
          <div
            className={
              show_catagory
                ? "container catagory-products catagory-products-on "
                : "container catagory-products catagory-products-off "
            }
          >
            <div className="row">
              <div className="col-xl-3">
                <br />
                <li className="mobiles">
                  <a href="">Mobile</a>
                </li>
                <br />
                <li>
                  <a href="">Tablet</a>{" "}
                </li>
                <li>
                  <a href="">Accessories</a>
                </li>
                <li>
                  <a href="">Mobile Phones</a>
                </li>
                <br />

                <li className="vehicles">
                  <a href="">Vehicles</a>
                </li>
                <br />
                <li>
                  <a href="">Car</a>
                </li>
                <li>
                  <a href="">Car on Installment</a>
                </li>
                <li>
                  <a href="">Car Accessories</a>
                </li>
                <li>
                  <a href="">Spare Parts</a>
                </li>
                <li>
                  <a href="">Buses, Vans and Trucks</a>
                </li>
                <li>
                  <a href="">Rickshaw and Chingchi</a>
                </li>
                <li>
                  <a href="">Other Vehicles</a>
                </li>
                <li>
                  <a href="">Boats</a>
                </li>
                <li>
                  <a href="">Tractors {"&"} Trailers</a>
                </li>
                <br />
                <li className="property-sale">
                  <a href="">Property For Sale</a>
                </li>
                <br />
                <li>
                  <a href="">Lands and Plots</a>
                </li>
                <li>
                  <a href="">Houses</a>
                </li>
                <li>
                  <a href="">Apartments and Flats</a>
                </li>
                <li>
                  <a href="">Shops - Offices - Commercial Space</a>
                </li>
                <li>
                  <a href="">Portions {"&"} Floors</a>
                </li>
                <br />
                <li className="property-rent">
                  <a href="">Property for Rent</a>
                </li>
                <br />
                <li>
                  <a href="">Apartments and Flats</a>
                </li>
                <li>
                  <a href="">Portions {"&"} Floors</a>
                </li>
                <li>
                  <a href="">Shops - Offices - Commercial Space</a>
                </li>
                <li>
                  <a href="">Roommates {"&"} Paying Guests</a>
                </li>
                <li>
                  <a href="">Vacation Rentals - Guest Houses</a>
                </li>
                <li>
                  <a href="">Land {"&"} Plots</a>
                </li>
              </div>

              <div className="col-xl-3">
                <br />
                <li className="electronics-home-appliances">
                  <a href=""> Electronics {"&"} Home Appliances</a>
                </li>
                <br />
                <li>
                  <a href="">Computers {"&"} Accessories</a>
                </li>
                <li>
                  <a href="">TV - Video - Audio</a>
                </li>
                <li>
                  <a href="">Cameras {"&"} Accessories</a>
                </li>
                <li>
                  <a href="">Games {"&"} Entertainment</a>
                </li>
                <li>
                  <a href="">Other Home Appliances</a>
                </li>
                <li>
                  <a href="">Generators, UPS {"&"} Power Solutions</a>
                </li>
                <li>
                  <a href="">Kitchen Appliances</a>
                </li>
                <li>
                  <a href="">AC {"&"} Coolers</a>
                </li>
                <li>
                  <a href="">Fridges {"&"} Freezers</a>
                </li>
                <li>
                  <a href="">Washing Machines {"&"} Dryers</a>
                </li>
                <br />
                <li className="bikes">
                  <a href="">Bikes</a>
                </li>
                <br />
                <li>
                  <a href="">Motorcycles</a>
                </li>
                <li>
                  <a href="">Spare Parts</a>
                </li>
                <li>
                  <a href="">Bicycles</a>
                </li>
                <li>
                  <a href="">ATV {"&"} Quads</a>
                </li>
                <li>
                  <a href="">Scooters</a>
                </li>
                <br />
                <li className="business-industrial">
                  <a href="">Business, Industrial {"&"} Agriculture</a>
                </li>
                <br />
                <li>
                  <a href="">Business for Sale</a>
                </li>
                <li>
                  <a href="">Food {"&"} Restaurants</a>
                </li>
                <li>
                  <a href="">Trade {"&"} Industrial</a>
                </li>
                <li>
                  <a href="">Construction {"&"} Heavy Machinery</a>
                </li>
                <li>
                  <a href="">Agriculture</a>
                </li>
                <li>
                  <a href="">Other Business {"&"} Industry</a>
                </li>
                <li>
                  <a href="">Medical {"&"} Pharma</a>
                </li>
                <br />
                <li className="services">
                  <a href="">Services</a>
                </li>
                <br />
                <li>
                  <a href="">Education {"&"} Classes</a>
                </li>
                <li>
                  <a href="">Travel {"&"} Visa</a>
                </li>
                <li>
                  <a href="">Car Rental</a>
                </li>
                <li>
                  <a href="">Drivers {"&"} Taxi</a>
                </li>
                <li>
                  <a href="">Web Development</a>
                </li>
                <li>
                  <a href="">Other Services</a>
                </li>
                <li>
                  <a href="">Electronics {"&"} Computer Repair</a>
                </li>
                <li>
                  <a href="">Event Services</a>
                </li>
                <li>
                  <a href="">Health {"&"} Beauty</a>
                </li>
                <li>
                  <a href="">Maids {"&"} Domestic Help</a>
                </li>
                <li>
                  <a href="">Movers {"&"} Packers</a>
                </li>
                <li>
                  <a href="">Home {"&"} Office Repair</a>
                </li>
                <li>
                  <a href="">Catering {"&"} Restaurant</a>
                </li>
                <li>
                  <a href="">Farm {"&"} Fresh Food</a>
                </li>
                <br />
              </div>
              <div className="col-xl-3">
                <br />
                <li className="jobs">
                  <a href="">Jobs</a>
                  <br />
                </li>
                <li>
                  <a href="">Online</a>
                </li>
                <li>
                  <a href="">Marketing</a>
                </li>
                <li>
                  <a href="">Advertising {"&"} PR</a>
                </li>
                <li>
                  <a href="">Education</a>
                </li>
                <li>
                  <a href="">Customer Service</a>
                </li>
                <li>
                  <a href="">Sales</a>
                </li>
                <li>
                  <a href="">IT {"&"} Networking</a>
                </li>
                <li>
                  <a href="">Hotels {"&"} Tourism</a>
                </li>
                <li>
                  <a href="">Clerical {"&"} Administration</a>
                </li>
                <li>
                  <a href="">Human Resources</a>
                </li>
                <li>
                  <a href="">Accounting {"&"} Finance</a>
                </li>
                <li>
                  <a href="">Manufacturing</a>
                </li>
                <li>
                  <a href="">Medical</a>
                </li>
                <li>
                  <a href="">Domestic Staff</a>
                </li>
                <li>
                  <a href="">Part - Time</a>
                </li>
                <li>
                  <a href="">Other Jobs</a>
                </li>
                <br />
                <li className="animals">
                  <a href="">Animals</a>
                </li>
                <br />
                <li>
                  <a href="">Fish {"&"} Aquariums</a>
                </li>
                <li>
                  <a href="">Birds</a>
                </li>
                <li>
                  <a href="">Hens {"&"} Aseel</a>
                </li>
                <li>
                  <a href="">Cats</a>
                </li>
                <li>
                  <a href="">Dogs</a>
                </li>
                <li>
                  <a href="">Livestock</a>
                </li>
                <li>
                  <a href="">Horses</a>
                </li>
                <li>
                  <a href="">Pet Food {"&"} Accessories</a>
                </li>
                <li>
                  <a href="">Other Animals</a>
                </li>
                <br />
                <li className="furniture">
                  <a href="">Furniture {"&"} Home Decor</a>
                </li>
                <br />
                <li>
                  <a href="">Sofa {"&"} Chairs</a>
                </li>
                <li>
                  <a href="">Beds {"&"} Wardrobes</a>
                </li>
                <li>
                  <a href="">Home Decoration</a>
                </li>
                <li>
                  <a href="">Tables {"&"} Dining</a>
                </li>
                <li>
                  <a href="">Garden {"&"} Outdoor</a>
                </li>
                <li>
                  <a href="">Painting {"&"} Mirrors</a>
                </li>
                <li>
                  <a href="">Rugs {"&"} Carpets</a>
                </li>
                <li>
                  <a href="">Curtains {"&"} Blinds</a>
                </li>
                <li>
                  <a href="">Office Furniture</a>
                </li>
                <li>
                  <a href="">Other Household Items</a>
                </li>
              </div>
              <div className="col-xl-3">
                  <br />
                <li className="fashion-beauty">
                  <a href=""> Fashion {"&"} Beauty</a>
                </li>
                <br />
                <li>
                  <a href=""> Accessories</a>
                </li>
                <li>
                  <a href=""> Clothes</a>
                </li>
                <li>
                  <a href=""> Footwear</a>
                </li>
                <li>
                  <a href=""> Jewellery</a>
                </li>
                <li>
                  <a href=""> Make Up</a>
                </li>
                <li>
                  <a href=""> Skin {"&"} Hair</a>
                </li>
                <li>
                  <a href=""> Watches</a>
                </li>
                <li>
                  <a href=""> Wedding</a>
                </li>
                <li>
                  <a href=""> Lawn {"&"} Pret</a>
                </li>
                <li>
                  <a href=""> Couture</a>
                </li>
                <li>
                  <a href=""> Other Fashion</a>
                </li>
                <br />
                <li className="books-sports">
                  <a href=""> Books, Sports {"&"} Hobbies</a>
                </li>
                <br />
                <li>
                  <a href=""> Books {"&"} Magazines</a>
                </li>
                <li>
                  <a href=""> Musical Instruments</a>
                </li>
                <li>
                  <a href=""> Sports Equipment</a>
                </li>
                <li>
                  <a href=""> Gym {"&"} Fitness</a>
                </li>
                <li>
                  <a href=""> Other Hobbies</a>
                </li>
                <br />
                <li className="kids">
                  <a href=""> Kids</a>
                </li>
                <br />
                <li>
                  <a href=""> Kids Furniture</a>
                </li>
                <li>
                  <a href=""> Toys</a>
                </li>
                <li>
                  <a href=""> Prams {"&"} Walkers</a>
                </li>
                <li>
                  <a href=""> Swings {"&"} Slides</a>
                </li>
                <li>
                  <a href=""> Kids Bikes</a>
                </li>
                <li>
                  <a href=""> Kids Accessories</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
