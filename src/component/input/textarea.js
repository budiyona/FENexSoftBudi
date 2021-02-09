import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {hover, onChange, name} = this.props
        return ( 
            <textarea className={hover} onChange={onChange} name={name}/>
         );
    }
}
 
export default TextArea;