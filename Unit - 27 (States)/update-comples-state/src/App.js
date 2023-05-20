import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, 
        {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, 
        {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, 
        {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(() => {
      const index = Math.floor(Math.random() * this.state.instructors.length);
      if(this.state.instructors[index].hobbies.length != 0) {
        const hobbyIndex = Math.floor(Math.random() * this.state.instructors[index].hobbies.length);
        // const instructors = this.state.instructors.slice();
        // instructors[index] = Object.assign({},instructors[index]);
        // instructors[index].hobbies = instructors[index].hobbies.slice();
        // instructors[index].hobbies.splice(hobbyIndex,1);
        // this.setState({instructors});

        // V2
        const instructors = this.state.instructors.map((ins, i) => (
          i == index ? {
            ...ins,
            hobbies: [...ins.hobbies.slice().splice(hobbyIndex,1)]
          } : ins
        ));
        this.setState({instructors});
      }
    }, 5000);
  }


  render () {
    const instructors = this.state.instructors.map((ins, index) => {
      return (<li key={index}>
        <h2>{ins.name}</h2>
        <h4>Hobbies : {ins.hobbies.join(', ')}</h4>
      </li>)
    });
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
