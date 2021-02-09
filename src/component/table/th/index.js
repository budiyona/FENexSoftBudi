import React, { Component } from 'react';

class Th extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {children, position} = this.props 
        return ( 
            <th className={position}>{children}</th>
         );
    }
}
 
export default Th;