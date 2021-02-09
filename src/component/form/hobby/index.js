import React, { Component } from 'react';
import Label from '../../label'
import {Input} from "../../input";
class Hobby extends Component {
    constructor(props) {
        super(props);
        this.state = { check: "checkbox" }
    }
    render() { 
        const {hover} = this.props
        return ( 
        <div>
            <div className="field">
                <Label> Hobby </Label>
            </div>
            <div className="field">
                <Label > Berenang </Label>
                <Input typeInput={this.state.check} hover={hover}/>
                <Label > Bersepeda </Label>
                <Input typeInput={this.state.check} hover={hover}/>
                <Label > joging </Label>
                <Input typeInput={this.state.check} hover={hover}/>
                <Label > Futsal </Label>
                <Input typeInput={this.state.check}/>
            </div>
        </div> 
        );
    }
}
 
export default Hobby;