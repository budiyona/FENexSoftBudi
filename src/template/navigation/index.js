import React, { Component } from 'react';
import Menu from '../../component'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
        </div>
         );
    }
}
 
export default Nav;
