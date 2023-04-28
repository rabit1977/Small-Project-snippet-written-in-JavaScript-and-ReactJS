import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Tabs />
      </div>
    </>
  );
}

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          London
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Paris
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          Tokyo
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <h2>London</h2>
          <p>London is the capital city of England.</p>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <h2>Paris</h2>
          <p>Paris is the capital of France.</p>
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
