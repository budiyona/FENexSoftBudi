import React, { Component } from 'react';
class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const{children,classes, disable} = this.props
        if(disable){
            return ( 
                <option value={classes} disabled selected>{children} </option>
             );
        }else{
            return ( 
                <option value={classes} >{children}</option>
             );
        }
    }
}
 
export default Option;