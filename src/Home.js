import React from "react";
import Contato from './Contato'
import { Link} from "react-router-dom";
import homeImg from './img/photo3.jpg'
import logo from './img/logo1.jpg'
import img1 from './img/depoimento1.jpg'
import img2 from './img/depoimento2.jpg'
import img3 from './img/depoimento3.jpg'
import img4 from './img/depoimento4.jpg'
import img5 from './img/depoimento5.jpg'
import img6 from './img/depoimento6.jpg'
import img7 from './img/depoimento7.jpg'
import img8 from './img/depoimento8.jpg'

  function Home(){
    return(
      <div>
      <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbarHome" data-bs-theme="dark">
      <div class="container-fluid">
      <img className="logoimg" src={logo} alt="" />
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


  <div>
        <header>
            <div class="topo">
             <h1 class="tittle">Guarde memórias incríveis</h1>
            </div>  
        </header>
         <section>
            <div class="explain">
                <img src={homeImg} alt="" class="photo" />
                <div class="text">
                    <h1 class="tittleContent">Conforto</h1>
                    <p class="subtittleContent"><span>Comodidade sempre.</span> Surpreenda-se com nossa lista pessoal de hoteis indicados com condições exclusivas para clientes.</p>
                    <h1 class="tittleContent">Experiência</h1>
                    <p class="subtittleContent"><span>Descubra o que seu destino escolhido tem de melhor.</span> Tenha acesso a uma lista personalizada, criada por pessoas como você, de lugares para conhecer e se surpreender.</p>
                    <h1 class="tittleContent">Segurança</h1>
                    <p class="subtittleContent"><span>Sua única preocupação é aproveitar.</span> Independente da sua escolha de destino e condições, tenha acesso ao nosso suporte seguro disponibilizado para resolver rapidamente imprevistos inesperados.</p> 
                </div> 
            </div>
        </section>
      </div> 

<main>
<div class="prove">
          <h1 class="numberCostumer">+ 50.000 clientes satisfeitos</h1>
      </div>
      <div class="containercostumers">
          <h1 class="costumers">Veja o que dizem nossos clientes</h1>
          <div class="depoimentos">
              <img src={img1} alt="" class="item" />
              <img src={img2} alt="" class="item" />
              <img src={img3} alt="" class="item" />
              <img src={img4} alt="" class="item" />
              <img src={img5} alt="" class="item" />
              <img src={img6} alt="" class="item" />
              <img src={img7} alt="" class="item" />
              <img src={img8} alt="" class="item" /> 
          </div> 
      </div>
</main>
        <footer>
            <p class="textFooter">Todos os direitos reservados</p>
        </footer>
      </div>
    )
  }
  
export default Home;