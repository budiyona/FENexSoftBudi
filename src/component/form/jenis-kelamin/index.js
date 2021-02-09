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
        const {hover ,name, onChange} = this.props
        return ( 
            <div className="jenis-kelamin">
                <div className="field">
                    <Label > Jenis Kelamin </Label>    
                </div>
                <div className="field">
                    <Label > Laki-Laki </Label>
                    <Input typeInput={this.state.radio} hover={hover} name={name} value="L" onChange={onChange}/>
                    <Label > Perempuan </Label>
                    <Input typeInput={this.state.radio} hover={hover} name={name} value="P" onChange={onChange}/>
                </div>
            </div>
         );
    }
}
 
export default JenisKelamin;