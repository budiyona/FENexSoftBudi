import React, { Component } from 'react';

class Td extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children, position} = this.props
        return ( 
            <td className={position}>{children}</td>
        );
    }
}
 
export default Td;