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
    
    if (currentVal === null) currentVal ='0';
    if (prevVal === null) prevVal = '0';
    console.log( 'currntVal, preval and Operand',currentVal, prevVal, operand)
    if (operand === '+') return parseFloat(currentVal) + parseFloat(prevVal);
    else if (operand === '-') return parseFloat(prevVal) - parseFloat(currentVal);
    else if (operand === 'x') return parseFloat(currentVal) * parseFloat(prevVal);
    else if (operand === '÷') return parseFloat(prevVal) / parseFloat(currentVal);
  }


  inputNumbers = (props) => {
    
    const digit = props.target.value;
    const { displayValue, waitingForNewValue } = this.state;   
    
    console.log(typeof displayValue)
   
    if (displayValue.includes('.') && digit === '.'){
      return;
    } 
    else if (waitingForNewValue) {
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
        previousValue: null,
        waitingForNewValue: true,
        operation: null,
      }, () => {
        console.log('state in Equal', this.state)
      })
    }

    else if (operand === '%') {
      this.setState({
        displayValue: parseFloat(displayValue) / 100,
        waitingForNewValue: true
      })
    }

    else if (operand === 'C' || operand === 'AC') {
      if (operand === 'C') {
        this.clearDisplay()
      }
      else {
        this.clearAll()
      }
    }

    else if (operand === '±') {

      this.setState({
        displayValue: parseFloat(displayValue) * -1,
      })
    }

    else {

      if (previousValue === null) {
          this.setState({
            operation: operand,
            waitingForNewValue : true,
            previousValue: displayValue
          }, () => {
            console.log('Prev Val is NULL:',this.state)
          })  
        }
      else {
        const result = this.operations(displayValue, previousValue, operation)
        this.setState({
          displayValue: result,
          previousValue: result,
          operation: operand,
          waitingForNewValue: true

        }, () => {
          console.log('Prev Is NOT NULL: ', this.state)
        })
      }
    
  }
}


  render () {
    return (
      <>
      <div className="holder">
        <div className="calculator">
          <div className="row">

           <Inputview handleValue={this.state.displayValue} / >
           <Operators handleClick={this.handleOperators} stateOfWaitin={this.state.waitingForNewValue}/ >
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
