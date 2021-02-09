import React, { Component } from 'react';
import Label from '../label';
import Header from '../head';
import {Input, TextArea} from "../input";
import Select from "../select";
import JenisKelamin from "./jenis-kelamin";
import Hobby from "./hobby";
import './style.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            date: "date",
            textarea: "textarea",
            text: "text",
            submit: "submit",

            max: "max-width",
            hover: "input-hover"
        }
    }
    render() { 
        return ( 
            <form className="form">
                <Header>Form</Header>
                <br />
                <div className="field">
                    <Label> NAMA </Label>
                </div>
                <div className="field">
                    <Input maxWidth={this.state.max} hover={this.state.hover} typeInput={this.state.text}/>
                </div>
                <div className="field">
                    <Label> TTL </Label>
                </div>
                <div className="field">
                    <Input maxWidth={this.state.max} hover={this.state.hover} typeInput={this.state.date} />
                </div>
                    <JenisKelamin hover={this.state.hover}/>
                    <Hobby hover={this.state.hover}/>
                <div className="field">
                    <Label> Agama </Label>
                </div>
                <div className="field">
                    <Select maxWidth={this.state.max} hover={this.state.hover}></Select>
                </div>
                <div className="field">
                    <Label > Alamat </Label>
                </div>
                    <TextArea hover={this.state.hover}/>
                <div className="field"> 
                    <Input maxWidth={this.state.max} typeInput={this.state.submit} hover={this.state.hover}></Input>
                </div>
            </form>
         );
    }
}
export default Form;