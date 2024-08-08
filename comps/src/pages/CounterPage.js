import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {
    return {
        ...state,
        count: state.count + 1
    };
};


export default function CounterPage({ initialCount }) {

    //const [count, setCount] = useState(initialCount);

    //const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    console.log(state);

    const increment = () => {
        dispatch();
    }    

    const decrement = () => {
        //setCount(count - 1);
    }

    const handleChange = (event) => {
        /* 
            Even if we have an input type number, event.target.value is of type string.
            That's the reason of the parse function.

            Second issue, if we press delete we will get NaN. This happens when we pass 
            an empty string to parseInt.
        */
        const value = parseInt(event.target.value) || 0;
        //setValueToAdd(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //setCount(count + valueToAdd);
        //setValueToAdd(0);
    }
    
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input 
                    value={state.valueToAdd || 0}
                    onChange={handleChange}
                    type='number' 
                    className='p1 m-3 bg-gray-50 border border-gray-300'  
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );

}