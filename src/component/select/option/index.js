import React, { Component } from 'react';
class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const{children,classes} = this.props
        return ( 
            <option value={classes}>{children}</option>
         );
    }
}
 
export default Option;