import Counter from './Counter.js';

const App = () => {
  return (
    <div>
      <Counter initialCount={50} />
      {/* Lazy initialization */}
      {/* <Counter initialCount={50}/> */}
    </div>
  );
}

export default App;