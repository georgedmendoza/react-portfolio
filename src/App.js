// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  const [selection] = useState(['About me','Portfolio','Contact','Resume'])

  return (
    <div>
      <Nav
      selection={selection}
      ></Nav>
      <main>
        {/* <Header></Header> */}
      </main>
    </div>
  );
}

export default App;
