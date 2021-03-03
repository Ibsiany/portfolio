import '../styles/App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState(false);

  function ActiveButton(){
    setValue(true);
  }
  
  function DesactiveButton(){
    setValue(false);
  }

  return (

    <div className="container">
      <img src="./home.jpg" alt="Imagem de fundo" />
      {value ? (
        <>
          <div className="body-first">
            <h1>Portfólio | Ibsiany Dias Godinho</h1>
            <a href="https://ibisflix.vercel.app/" target="_blank"> 
              IBISFLIX
            </a>
            <a href="https://moveit-ibsiany.vercel.app/" target="_blank"> 
              Moveit (Desktop)
            </a>
            <button id="back" onClick={DesactiveButton}>
              Voltar
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="body">
            <h1>Portfólio | Ibsiany Dias Godinho</h1>
            <a href="https://github.com/ibsiany" target="_blank"> 
              GITHUB
              <img src="./icons/github-logo-2.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/ibsiany/" target="_blank">
              LINKEDIN
              <img src="./icons/linkedin-logo.png" alt="Linkedin" />
            </a>
            <a href="https://app.rocketseat.com.br/me/ibsiany-dias" target="_blank">
              ROCKETSEAT
              <img src="./icons/rocketseat-logo.png" alt="Rocketseat" />
            </a>
            <a onClick={ActiveButton} id="more">
              SITES ONLINE
              <img src="./icons/more.png" alt="Mais" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
