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
      <div className="body-container">
        <h1>Portfólio | Ibsiany Dias Godinho</h1>
        {value ? (
          <>
            <div className="body-first">
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
                <a href="https://github.com/ibsiany" target="_blank"> 
                  GITHUB
                  <img src="./icons/github-logo-2.png" />
                </a>
                <a href="https://www.linkedin.com/in/ibsiany/" target="_blank">
                  LINKEDIN
                  <img src="./icons/linkedin-logo.png" />
                </a>
                <a href="https://app.rocketseat.com.br/me/ibsiany-dias" target="_blank">
                  ROCKETSEAT
                  <img src="./icons/rocketseat-logo.png" />
                </a>
                <a onClick={ActiveButton} id="more">
                  SITES ONLINE
                  <img src="./icons/more.png" alt="Mais" />
                </a>
              </div>
          </>
        )}
      <div  className="contato" >
        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5531987158055" target="_blank" alt="Telefone de contato">
          <img src="./icons/whatsapp.svg" alt="Whatsapp"/>
        </a>
        <a href="mailto:ibsianyd@gmail.com" target="_blank" alt="E-mail de contato">
          <img src="./icons/gmail-logo.png" alt="Whatsapp"/>
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
