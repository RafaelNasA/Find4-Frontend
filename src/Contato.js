import React from "react";
import logo from "./img/logo1.jpg";
import contato from "./img/contato.png";
import {Link} from "react-router-dom";

function Contato() {
  return (
    <div className="blackc" >
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid promo">
                <a href=""><img className="logoin" src={logo} /> </a>
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav" >
                <a><Link class="nav-link botton1" to="/" >Home</Link></a>
                <a><Link class="nav-link botton" to="/Destino" >Destino</Link></a>
                <a><Link class="nav-link botton2" to="/Promocionais" >Promocionais</Link></a>
                <a><Link class="nav-link botton3" to="/Contato" >Contato</Link></a> 
                </div>
              </div>
            </div>
        </nav>
  

      <div class="containerc text-center">
        <div class="row">
          <div class="colc inputs">
            <div class="input-group namec">
              <span class="input-group-text">Insira seu nome</span>
              <input type="text" aria-label="First name" class="form-control" />
            </div>
            
              <div class="input-group">
                <span class="input-group-text">Insira seu email</span>
                <input
                  type="text"
                  aria-label="First name"
                  class="form-control"
                />
              </div>
            
            <div class="input-group">
              <span class="input-group-text">Insira o assunto</span>
              <input type="text" aria-label="First name" class="form-control" />
        </div>

            <div class="input-group">
              <span class="input-group-text">Escreva o que deseja</span>
              <textarea
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <p class="pc" >Ou entre em contato pelo telefone:000000000</p>
            <a href="##" class="botton-sendc">
              Enviar
            </a>
          </div>

          <div class="colc">
            <img className="imgc" src={contato} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
