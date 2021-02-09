import React, { Component } from 'react';
class Tr extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children, position} = this.props
        return ( 
            <tr className={position}>{children}</tr>
         );
    }
}
 
export default Tr;