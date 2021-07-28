import React, { ReactElement, useReducer } from 'react';

import { Reducer, TAction, TState } from '../types/appTypes';
// Lazy initialization
// import { TAction, TCounterProps, TInitialCount, TInitialState, TState } from '../types/appTypes';

const initialState: TState = { count: 0 };

const reducer: Reducer<TState, TAction> = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const Counter: React.FC = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

// ******************************************************

// Lazy initialization
// function init(initialCount: TInitialCount): TInitialState {
//   return { count: initialCount };
// }

// function reducer(state: TState, action: TAction): TState {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return init(action.payload);
//     default:
//       throw new Error();
//   }
// }

// export const Counter: React.FC<TCounterProps> = ({ initialCount }): ReactElement => {
//   const [state, dispatch] = useReducer(reducer, initialCount, init);
//   return (
//     <>
//       Count: {state.count}
//       <button
//         onClick={() => dispatch({ type: 'reset', payload: initialCount })}
//       >
//         Reset
//       </button>
//       <button
//         onClick={() => dispatch({ type: 'decrement' })}
//       >-</button>
//       <button
//         onClick={() => dispatch({ type: 'increment' })}
//       >+</button>
//     </>
//   );
// };