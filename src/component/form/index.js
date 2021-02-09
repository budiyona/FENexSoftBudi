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
            button: "button",

            max: "max-width",
            hover: "input-hover",
            value: "",
            
            nama: "",
            ttl: "",
            jk:"",
            hobby: [],
            agama: "",
            alamat: "",

            objtoSave: {}

        }
    }
    setValue = (el) =>{
        // console.log("SET VALUE RUN");
        // console.log("setvalueval",el.target);
        // console.log("setvalueval",el.target.name);
        this.setState(
            {
                [el.target.name]: el.target.value
            }
        )
    }
    saveValue = () => {
        const {nama,ttl, jk, hobby, agama, alamat} = this.state
        // console.log("save",nama,"ttl",ttl,"jk",jk,"hobby", hobby,"agama", agama,
        // "alamat",alamat);

        let umur = (birth) => {
            let dateBirth = new Date(birth)
            let monDiff = Date.now() - dateBirth.getTime()
            let age_dt = new Date(monDiff)
            let year = age_dt.getUTCFullYear()
            let age = Math.abs(year - 1970)
            return age
        }
        let obj = {
            nama, ttl, jk, hobby, agama, alamat, umur
        }
        this.props.tambah(obj)
        //  console.log(this.props.tambah);
        // this.setState({
        //     objtoSave: {nama: nama, ttl, jk, hobby, agama, alamat ,umur }
        // })
        // console.log(this.state.objtoSave.nama);
    }
    
    checkedCek = (el) => {
        let modArr = []
        if(el.target.checked){
            this.state.hobby.push(el.target.name)
            let s = new Set (this.state.hobby)
            modArr = Array.from(s)
        }else{
            modArr = this.state.hobby
            let index = modArr.findIndex( str => str===el.target.name)
            modArr.splice(index,1)
        }
        this.setState(
            {
                hobby : modArr
            }
        )

    }
    render() { 
        return ( 
            <div className="form">
                <Header>Form</Header>
                <br />
                <div className="field">
                    <Label> NAMA </Label>
                </div>
                <div className="field">
                    <Input maxWidth={this.state.max} hover={this.state.hover} typeInput={this.state.text} name="nama" onChange={this.setValue}/>
                </div>
                <div className="field">
                    <Label> TTL </Label>
                </div>
                <div className="field">
                    <Input maxWidth={this.state.max} hover={this.state.hover} typeInput={this.state.date}  name={"ttl"} onChange={this.setValue}/>
                </div>
                    <JenisKelamin hover={this.state.hover} name={"jk"} onChange={this.setValue}/>
                    <Hobby hover={this.state.hover} name={"hobby"} onClick={this.checkedCek}/>
                <div className="field">
                    <Label> Agama </Label>
                </div>
                <div className="field">
                    <Select maxWidth={this.state.max} hover={this.state.hover} name={"agama"}></Select>
                </div>
                <div className="field">
                    <Label > Alamat </Label>
                </div>
                    <TextArea hover={this.state.hover} name={"alamat"} onChange={this.setValue}/>
                <div className="field"> 
                    <Input 
                        maxWidth={this.state.max} 
                        typeInput={this.state.button} 
                        hover={this.state.hover} 
                        onClick={this.saveValue}
                        value="Input"  
                    />
                </div>
            </div>
         );
    }
}
export default Form;