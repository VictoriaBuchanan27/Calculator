import React, { Component } from 'react';
import Inputview from './components/Inputview'
import Operators from './components/operators'
import Numbers from './components/numbers'
import OperatorsCol from './components/operatorCol'
  
class App extends Component {

  constructor(props) {
    super(props)

    this.state =  {

        'displayValue': '0',
        'previousValue': null,
        'operation': null,
        'waitingForNewValue': false
      }    
  }

  clearDisplay() {
    this.setState( {
      'displayValue':'0'
    })
  }


  operations = (currentVal, prevVal, operand) => {

    if (operand === '+') return parseInt(currentVal) + parseInt(prevVal);
    else if (operand === '-') return parseInt(prevVal) - parseInt(currentVal);
    else if (operand === 'x') return parseInt(currentVal) * parseInt(prevVal);
    else if (operand === '÷') return parseInt(prevVal) / parseInt(currentVal);
  }

  inputNumbers = (props) => {
    
    const digit = props.target.value;
    const { displayValue, waitingForNewValue } = this.state;   

    if (waitingForNewValue) {
      this.setState({
        displayValue: String(digit),
        waitingForNewValue: false
      })
    } else {  
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }

  handleOperators = (props) => {
    
    const operand = props.target.value;
    const { displayValue, waitingForNewValue, operation, previousValue } = this.state;


    if (operand === '=') {
      const result = this.operations(displayValue, previousValue, operation)

      this.setState({
        displayValue: result,
        waitingForNewValue: false
      })
    }

    else if (operand === '%') {
      this.setState({
        displayValue: parseInt(displayValue) / 100,
        waitingForNewValue: true
      })
    }

    else if (operand === 'AC') {
      this.clearDisplay()
    }

    else if (operand === '±') {

      this.setState({
        displayValue: parseInt(displayValue) * -1,
      })
    }

    else {
    this.setState({
      displayValue: operand,
      operation: operand,
      waitingForNewValue : true,
      previousValue: displayValue
     })  
    }
  }

  render () {
    return (
      <>
      <div className="holder">
        <div className="calculator">
          <div className="row">

           <Inputview handleValue={this.state.displayValue} / >
           <Operators handleClick={this.handleOperators} / >
           <Numbers handleClick={this.inputNumbers} />
           <OperatorsCol handleClick={this.handleOperators} /> 
          
          </div>
        </div>
      </div>
      </>
    )
  }
}


export default App;
