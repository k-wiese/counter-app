import React, { Component } from 'react';
import Counter from './counterComponent'

class Counters extends Component {

    

    render() { 
        console.log('Counters - Rendered')
        const { onReset, counters, onDelete, onIncrement, onDecrement, onAdd} = this.props;
        return (
        <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2"
            >
            Reset
            </button>
            <button 
            onClick={onAdd}
            className="btn btn-primary btn-sm m-2"
            >
            Add
            </button>

            {counters.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onAdd={onAdd}
                counter = {counter}
            />
            )}
        </div>
        );
    }
}
 
export default Counters;