import React, { Component } from 'react';
import Inputview from './components/Inputview'
import Row1 from './components/Row1'
import Row2 from './components/Row2'
import Row3 from './components/Row3'
import Row4 from './components/Row4'
import Row5 from './components/Row5'

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


  render () {
    return (
      <>
      <div className="holder">
        <div className="calculator">
          <div className="row">
           <Inputview />
            <Row1 />
            <Row2 />
            <Row3 />
            <Row4 />
            <Row5 />

          </div>
        </div>
      </div>
      </>
    )
  }


}


export default App;
