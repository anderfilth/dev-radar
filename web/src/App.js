import React, {useState, useEffect} from 'react';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = {};

      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  async function handleAddDev(data) {
    const response = {};
    // const response = await api.post('/devs', data);
    const hasDev = devs.filter(dev => dev.github_name === data.github_name);
    
    if(!hasDev) {
      setDevs([...devs, response.data])
    }  
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main></main>
    </div>
  );
}

export default App;
