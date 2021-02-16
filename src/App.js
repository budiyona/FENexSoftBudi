import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no: 0,
      tampilInput: "",
      inputValue: "",
      lastNo: "",
      operator: "",
      combine: true,
      eksekusiKalkulator: 0
    }
    // this.angkaSaatIni
  }

  buttonClicked = (el) => {
    console.log(el.target);
    console.log(el.target.name);
    console.log(el.target.value);

  }
  inputValue = (el) => {
    let button = el.target
    let buttonValue = button.value
    console.log("input Value");
    console.log(buttonValue);
    let tampilSekarang = this.state.tampilInput
    if (this.state.combine) {
      tampilSekarang += buttonValue
    } else {
      tampilSekarang = buttonValue
      this.setState({ combine: true })
    }
    this.setState({
      tampilInput: tampilSekarang
    })
  }
  eksekusiKalkukator = (el) => {
    console.log(("eksekusi"));
    let button = el.target
    let operator = button.value
    console.log("operans", operator);
    let lastNumber = this.state.tampilInput
    if(this.state.operator.length > 0){
      this.samadengan()
    }
    this.setState({
      combine: false,
      lastNo: lastNumber,
      operator: operator

    })
    
  }
  samadengan = () => {
    let saatIni = parseInt(this.state.tampilInput)
    let tadi = parseInt(this.state.lastNo)
    let hasil
    if (this.state.operator.length > 0) {
      switch (this.state.operator) {
        case "-":
          hasil = tadi - saatIni
          break;
        case "+":
          hasil = tadi + saatIni
          break;
        case "*":
          hasil = tadi * saatIni
          break;
        default:
          hasil = tadi / saatIni
          break;
      }
      this.setState({
        tampilInput: hasil,
        operator: "",
        combine: false
      })

    }

  }
  clearInput = () => {
    let hasil=""
    this.setState({
      tampilInput: hasil
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" id="toCalculate3" value={this.state.tampilInput} readOnly />
        <br />
        <input type="button" name="inputvalue" value="7" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="inputvalue" value="8" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="inputvalue" value="9" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="tombolkalkulator" value="-" onClick={(el) => this.eksekusiKalkukator(el)} />
        <input type="button" name="tombolkalkulator" value="CE" onClick={this.clearInput} />
        <br />
        <input type="button" name="inputvalue" value="4" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="inputvalue" value="5" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="inputvalue" value="6" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="tombolkalkulator" value="+" onClick={this.eksekusiKalkukator} />
        <br />
        <input type="button" name="inputvalue" value="1" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="inputvalue" value="2" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="inputvalue" value="3" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="tombolkalkulator" value="*" onClick={this.eksekusiKalkukator} />
        <br />
        <input type="button" name="inputvalue" value="0" onClick={(el) => this.inputValue(el)} />
        <input type="button" name="" value="." />
        <input type="button" name="tombolkalkulator" value="=" onClick={this.samadengan} />
        <input type="button" name="tombolkalkulator" value="/" onClick={this.eksekusiKalkukator} />

      </div>
    );
  }
}

export default App;

