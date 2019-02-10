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
    }, () => {
      console.log('in clear Display: ', this.state)
    })
  }

  clearAll() {
    this.setState({
      'displayValue': '0',
      'previousValue': null,
      'operation': null,
      'waitingForNewValue': false
    }, ()=> {
      console.log('in CLear All: ', this.state)
    })
  }

  operations = (currentVal, prevVal, operand) => {
    
    if (currentVal === null || currentVal === undefined) currentVal = '0';
    if (prevVal === null || prevVal === undefined) prevVal = '0'; 
  
    if (operand === '+') return parseFloat(currentVal) + parseFloat(prevVal);
    else if (operand === '-') return parseFloat(prevVal) - parseFloat(currentVal);
    else if (operand === 'x') return parseFloat(currentVal) * parseFloat(prevVal);
    else if (operand === '÷') return parseFloat(prevVal) / parseFloat(currentVal);
  }


  inputNumbers = (props) => {
    
    const digit = props.target.value;
    const { displayValue, waitingForNewValue } = this.state;   
    
    const displayToStr = `${displayValue}`;

    if (displayToStr.split('').includes('.') && digit === '.'){    
       return;
    } 
    
    if (waitingForNewValue) {
      this.setState({
        displayValue: String(digit),
        waitingForNewValue: false
      }, ()=> {
        console.log('input num, waiting is true: ', this.state)
      })
    } else {  
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      }, ()=>{
        console.log('input num, waiting is false: ', this.state)
      })
    }
  }
  
  handleOperators = (props) => {
    
    const operand = props.target.value;
    const { displayValue, previousValue, operation, waitingForNewValue } = this.state;
    

    if (operand === '=') {
      let result = this.operations(displayValue, previousValue, operation)

      this.setState({
        displayValue: result === undefined ? '0' : result,
        previousValue: null,
        waitingForNewValue: false,
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
           <Operators handleClick={this.handleOperators} stateOfWaitin={this.state.waitingForNewValue} prevVal={this.state.previousValue}/ >
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
