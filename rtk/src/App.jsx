import { Profiler } from 'react';
import Product from './Product';
import './App.css';

function App() {
  console.log('render')
  // Define the onRender callback function for the Profiler
  const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
  };

  return (
    <>
      <h1>Redux Rtk By Suchit Kapale</h1>
      {/* <Profiler id="Product" onRender={onRenderCallback}>
        <Product />
      </Profiler> */}
      <Product/>
    </>
  );
}

export default App;
