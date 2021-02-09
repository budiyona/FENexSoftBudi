import React, { Component } from 'react';
import Option from "./option";

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            islam: "Islam",
            hindu: "Hindu",
            kristen: "Kristen",
            budha: "Budha"
         }
    }
    render() { 
        const {maxWidth,hover} = this.props
        return ( 
            <select className={maxWidth+" "+hover}>
                <Option classes={this.state.islam}>{this.state.islam} </Option>
                <Option classes={this.state.hindu}>{this.state.hindu}</Option>
                <Option classes={this.state.kristen}>{this.state.kristen}</Option>
                <Option classes={this.state.budha}>{this.state.budha}</Option>
                
            </select>
         );
    }
}
 
export default Select;