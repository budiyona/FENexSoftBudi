import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        const {typeInput, maxWidth, hover, onChange, value, onClick, name} = this.props
        return ( 
            <input 
                className={maxWidth + " " + hover} 
                type={typeInput} 
                onChange={onChange} 
                value={value} 
                onClick={onClick} 
                name={name}
            />

        );
    }
}
 
export default Input;