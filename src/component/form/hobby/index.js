import React, { Component } from 'react';
import Label from '../../label'
import {Input} from "../../input";
class Hobby extends Component {
    constructor(props) {
        super(props);
        this.state = { check: "checkbox" }
    }
    render() { 
        const {hover , onClick} = this.props
        return ( 
        <div>
            <div className="field">
                <Label> Hobby </Label>
            </div>
            <div className="field">
                <Label > Berenang </Label>
                <Input typeInput={this.state.check} hover={hover} onClick={onClick} name="berenang"/>
                <Label > Bersepeda </Label>
                <Input typeInput={this.state.check} hover={hover} onClick={onClick} name="bersepeda"/>
                <Label > joging </Label>
                <Input typeInput={this.state.check} hover={hover} onClick={onClick} name="jogging"/>
                <Label > Futsal </Label>
                <Input typeInput={this.state.check} hover={hover} onClick={onClick} name="futsal"/>
            </div>
        </div> 
        );
    }
}
 
export default Hobby;