import React, { useState } from 'react';

import './global.css'
import './Sidebar.css'
import './App.css'

//Componente
//Estado
//Propriedade
function App() {
 
  return (
    <div id="app">
      <aside>
        <strong >Cadastrar</strong>
        <form>
          <div class="input-block">
          <label htmlFor="username_github"> Usuário do Github</label>
          <input name="github_username" id="username_github" required/>
          </div>

          <div className= "input-group">
            <div class="input-block">
            <label htmlFor="latitude">Tecnologias</label>
            <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" required/>
            </div>
          </div>
          <button type= "submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
