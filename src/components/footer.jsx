import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../Css/footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container footer-main">
          <div className="row">
            <div className="col-xl-3">
              <br />
              <h6>POPULAR CATAGORIES</h6>
              <li className="list-popular">Cars</li>
              <li className="list-popular">Flat for rents</li>
              <li className="list-popular">Jobs</li>
              <li className="list-popular">Mobile Phones</li>
            </div>
            <div className="col-xl-3">
              <br />
              <h6>TRENDING SEARCHES</h6>
              <li className="list-popular">Bikes</li>
              <li className="list-popular">Watches</li>
              <li className="list-popular">Books</li>
              <li className="list-popular">Dogs</li>
            </div>
            <div className="col-xl-2">
              <br />
              <h6>ABOUT US</h6>
              <li className="list-popular">About KAS Group</li>
              <li className="list-popular">KAS Blog</li>
              <li className="list-popular">Contact Us</li>
              <li className="list-popular">KAS for Business</li>
            </div>
            <div className="col-xl-2">
              <br />
              <h6>KAS</h6>
              <li className="list-popular">Help</li>
              <li className="list-popular">Sitemap</li>
              <li className="list-popular">Legal {"&"} Privacy Information</li>
              <li className="list-popular">Mobile Phones</li>
            </div>
            <div className="col-xl-2">
              <br />
              <h6 className="follow-us">FOLLOW US</h6>
              <ul className="icons">
                <li className="icon-popular">
                  <FacebookIcon />
                </li>
                <li className="icon-popular">
                  <TwitterIcon />
                </li>
                <li className="icon-popular">
                  <YouTubeIcon />
                </li>
                <li className="icon-popular">
                  <InstagramIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid rights">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <h6>
                  Other Countries <span><a href="">India</a> - <a href="">South Africa</a> - <a href="">Indonesia</a></span>
                </h6>
              </div>
              <div className="col-xl-6">
                <h6>
                  Free Classifieds in Pakistan<span>. © 2006-2020 OLX</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
