import React, { Component } from 'react';
import Label from '../../label'
import {Input} from "../../input";
class JenisKelamin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio: "radio"
          }
    }
    render() { 
        const {hover} = this.props
        return ( 
            <div className="jenis-kelamin">
                <div className="field">
                    <Label > Jenis Kelamin </Label>    
                </div>
                <div className="field">
                    <Label > Laki-Laki </Label>
                    <Input typeInput={this.state.radio} hover={hover}/>
                    <Label > Perempuan </Label>
                    <Input typeInput={this.state.radio} hover={hover}/>
                </div>
            </div>
         );
    }
}
 
export default JenisKelamin;