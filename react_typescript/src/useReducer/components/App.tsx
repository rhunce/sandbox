import { Counter } from './Counter';

const App = () => {
  return (
    <div>
      <Counter />
      {/* Lazy initialization */}
      {/* <Counter initialCount={50}/> */}
    </div>
  );
}

export default App;