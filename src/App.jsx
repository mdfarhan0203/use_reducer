import { useReducer } from 'react';
import './App.css';

function App() {
  let initial = 0;
  const [state, dispatch] = useReducer(counter, initial);

  function counter(state, action) {
    console.log('Action', action);
    console.log('state', state);

    switch (action) {
      case 'INCREMENT':
        return (state = state + 1);

      case 'DECREMENT':
        return (state = state - 1);

      default:
        return state;
    }
  }

  return (
    <>
      <div>
        <h3>Build Counter Using Reducer</h3>
        <p>{state}</p>
        <div>
          <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
          <button onClick={() => dispatch('INCREMENT')}>Increment</button>
        </div>
      </div>
    </>
  );
}

export default App;
