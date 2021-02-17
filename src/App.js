import React, { Component } from 'react';
import Body from './page/body';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <Body></Body>
            </Router>
         );
    }
}
 
export default App;