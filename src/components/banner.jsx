import React, {Component} from 'react'
import '../Css/banner.css'
class Banner extends Component{
    render(){
        return(
            <div className="">
                <img className={this.props.class} src={this.props.imgSrc} width="100%" />
            </div>

        )
    }
}

export default Banner