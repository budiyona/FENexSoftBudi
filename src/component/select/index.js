import React, { Component } from 'react';
import Option from "./option";

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            islam: "Islam",
            hindu: "Hindu",
            kristen: "Kristen",
            budha: "Budha",
            disable: true
         }
    }
    setValue = (el) =>{
        console.log("SET VALUE RUN");
        console.log("setvalueval",el.target);
        console.log("setvalueval",el.target.name);
        console.log("setvalueval",el.target.value);
        // this.setState(
        //     {
        //         [el.target.name]: el.target.value
        //     }
        // )
    }
    render() { 
        const {maxWidth,hover, name} = this.props
        return ( 
            <select className={maxWidth+" "+hover} name={name} onChange={this.setValue} >
                <Option classes={this.state.islam} disable ={this.state.disable} > Pilih Agama </Option>
                <Option classes={this.state.islam}>{this.state.islam} </Option>
                <Option classes={this.state.hindu}>{this.state.hindu}</Option>
                <Option classes={this.state.kristen}>{this.state.kristen}</Option>
                <Option classes={this.state.budha}>{this.state.budha}</Option>
                
            </select>
         );
    }
}
 
export default Select;