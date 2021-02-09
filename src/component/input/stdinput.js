import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        const {typeInput, maxWidth, hover} = this.props
        return ( 
            <input className={maxWidth+" "+hover} type={typeInput} required/>
        );
    }
}
 
export default Input;