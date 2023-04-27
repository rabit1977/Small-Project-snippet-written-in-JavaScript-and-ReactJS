import './App.css';

function App() {
  function myFunction(event) {
    event.currentTarget.classList.toggle('change');
  }
  return (
    <>
      <div className='form'>
        <div className='form-center'>
          <h1>Menu icon</h1>
          <div className='menu-icon'></div>
          <div className='menu-icon'></div>
          <div className='menu-icon'></div>
        </div>

        <div className='form-center'>
          <h1>Animated Menu icon</h1>
          <div className='form-center' onClick={myFunction}>
            <div className='menu-icon bar1'></div>
            <div className='menu-icon bar2'></div>
            <div className='menu-icon bar3'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
