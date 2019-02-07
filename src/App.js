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

    if (operand === '+') return parseFloat(currentVal) + parseFloat(prevVal);
    else if (operand === '-') return parseFloat(prevVal) - parseFloat(currentVal);
    else if (operand === 'x') return parseFloat(currentVal) * parseFloat(prevVal);
    else if (operand === '÷') return parseFloat(prevVal) / parseFloat(currentVal);
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
    const clear = props.target.innerHTML;
  console.log(typeof(clear))
    if (operand === '=') {
      const result = this.operations(displayValue, previousValue, operation)

      this.setState({
        displayValue: result,
        waitingForNewValue: false
      })
    }

    else if (operand === '%') {
      this.setState({
        displayValue: parseFloat(displayValue) / 100,
        waitingForNewValue: true
      })
    }

    else if (operand === 'AC') {
      if (clear === 'AC'){
        this.clearDisplay()
      }else{
        this.setState({previousValue: null})
      }
      
    }

    else if (operand === '±') {

      this.setState({
        displayValue: parseFloat(displayValue) * -1,
      })
    }

    else {
      console.log(this.state.operation)
    this.setState({
    //  displayValue: operand, //console.log (+)
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
           <Operators handleDoubleClick={this.handleOperators} handleClick={this.handleOperators} / >
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
