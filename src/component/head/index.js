import React, { Component } from 'react';
import './style.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <span className="center">{this.props.children}</span>
         );
    }
}
 
export default Header;
