import './App.css';
import React, { Component } from 'react';
import Menu from './component/menu'
import {Footer, Header, Nav} from './template'
class App extends Component {
  render() { 
    let obj = {id: 1, nama:"saya"}
    let hello = "Hello world"
    const bgColor={
      backgroundColor:"aqua"
    }
    return ( 
      <>
      <Footer />
      <Header />
      <Nav />
      <Menu />
      <div className="bgBaru">
        Hello World
      </div>
      <div>
        {hello}
      </div>
      <div>
        {obj.id}
        {obj.nama}
      </div>
      <div style={{backgroundColor:"grey"}}> grey
      </div>
      <div style={bgColor}>
        aqua color
      </div>
      </>

    );
  }
}
 
export default App;

