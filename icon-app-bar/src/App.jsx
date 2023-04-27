import './App.css';
import { FaEnvelope, FaGlobe, FaSearch, FaTrash } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

function App() {
  return (
    <>
      <div className='icon-app-bar'>
        <a href='#' className='active'>
          <FaHome />
        </a>
        <a href='#'>
          <FaSearch />
        </a>
        <a href='#'>
          <FaEnvelope />
        </a>
        <a href='#'>
          <FaGlobe />
        </a>
        <a href='#'>
          <FaTrash />
        </a>
      </div>
    </>
  );
}

export default App;
