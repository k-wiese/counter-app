import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = { 
    counters: [
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:3},
        {id:4,value:0}
    ]
  };

  constructor() {
    super();
    console.log('App - Constructed');
    
  }

  componentDidMount() {
    // Ajax Call
    console.log('App - Mounted')
  }

  handleDecrement = counter => {

    if(!(counter.value === 0)) 
    {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({counters});
    }
    
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  };

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  };

  handleAdd = () => {
      this.setState({ counters: [...this.state.counters, {id: this.state.counters.length + 1,value:1}] })

  };

  render() {
    console.log('App - Rendered')

    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
  
      <main className="container">
  
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
        />
  
      </main>
      </React.Fragment>
    );
  }
}

export default App;
