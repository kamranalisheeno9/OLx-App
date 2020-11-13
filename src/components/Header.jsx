import React, {Component} from 'react'
import Logo_image from '../images/logo.png'
import Button from '../components/button'
import SearchIcon from '@material-ui/icons/Search';
import '../Css/Header.css'

class Header extends Component{
    constructor() {
        super();
        this.state = {
          fav: true,
        };
      }
    render(){
        return(
            <div className="container-fluid header-color ">
               <div className="container header">
                <img className="logo-img" src={Logo_image} />
                <div className="area">
                <button className="btn-area"><SearchIcon className="btn-icon" />
                </button>
                <select className="area-search" name="" id="">
                    <option value="">Sindh</option>
                    <option value="">Punjab</option>
                    <option value="">Balochistan</option>
                    <option value="">Khyber Pakhtunkhwa</option>
                </select>
                
                </div>
                <div className="search">
                <input className="search-box" type="text" name="search" placeholder="Search Here"/>
                <button className="btn-search"><SearchIcon className="btn-icon" /></button>
                </div>
                <a href="" className="login-btn">LOGIN</a>
                <Button />
            </div>
            </div>
        )
    }
}

export default Header