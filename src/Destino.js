import React from "react";
import logo1 from './img/logo1.jpg'
import plane1 from './img/airplane1.jpg'
import plane2 from './img/airplane2.jpg'
import customer from './img/customer.jpg'
import {Link} from "react-router-dom";

function Destino(){
    return(
        <div>

        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbarHome" data-bs-theme="dark">
        <div class="container-fluid">
        <img className="logoimg" src={logo1} alt="" />
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
        </div>


            <main className="main" >
                <div class="destino">
                    <h1 className="hh" >Escolha seu destino</h1>
                <div class="idaEVolta">
                <div class="origem">
                    <img className="img" src={plane1} alt="icone avião decolando"/>
                    <input class="textOrigem" type="text" placeholder="Qual seu estado atual?"/>
                </div>
                <div class="destinoo">
                    <img className="img" src={plane2} alt="ícone avião pousando"/>
                    <input class="textOrigem" type="text" placeholder="Para onde você quer ir?"/>
                </div>
                </div>
                <p className="ppp" >Escolha data de ida e volta</p>
                <div class="data"> 
                <div class="data1">
                    <input class="date" type="date" name="Data de ida"/>  
                </div>
                <div class="data2">
                    <input class="date" type="date" name="Data de volta"/>
                </div>
                </div>

                <div class="quarto">
                    <img className="img" src={customer} alt="ícone usuário"/>
                    <input class="number" type="number" name="" placeholder="Quantos quartos deseja?"/>
                </div>
    
            <a><Link class="botton_finally"  to="/PosLogin">Pronto</Link></a>
            </div>
            </main>
        </div>
    )
}

export default Destino;