import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {hover} = this.props
        return ( 
            <textarea className={hover}/>
         );
    }
}
 
export default TextArea;