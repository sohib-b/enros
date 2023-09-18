import './App.css';

import MyNavbar from './components/MyNavbar';
import Blogs from './components/Blogs';
import Counter from './components/Counter';
import { useState } from 'react';




function App() {
  const [mode, setMode] = useState("lightMode")

  function toggleMode() {
    if (mode === 'lightMode') {
      setMode('darkMode')
    } else {
      setMode('lightMode')
    }

  }


  return (
    <div className={
      mode
    }>
      <button onClick={toggleMode}>The Mode</button>
      <MyNavbar />
      <Counter />

      <Blogs />



    </div>
  );
}

export default App;
