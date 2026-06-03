import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import Historias from './components/historias';
import Menu from './components/menu';
import Publicaciones from './components/publicaciones .tsx';

function App() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <div className="app-shell">
        <main className="app-main">
          <Header/>
          <div className="content">
          <div className="sidebar-content">
            <Menu/>
            <div>
            <Historias/>
            <Publicaciones/>
            </div>
          </div>
          
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
