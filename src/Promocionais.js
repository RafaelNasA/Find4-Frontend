import React from "react";
import logo from './img/logo1.jpg'
import jordao from './img/fundojordao.jpg'
import fortaleza from './img/fundofortaleza.jpg'
import gramado from './img/fundogramado.jpg'
import orlando from './img/fundoorlando.jpg'
import londres from './img/fundolondres.jpg'
import mexico from './img/fundotulummexico.jpg'
import buenos from './img/fundobuenosaires.jpg'
import tailandia from './img/fundophiphitailandia.jpg'
import haven from './img/fundoWhitehaven.jpg'
import {Link} from "react-router-dom";


function Promocionais(){
    return (
        <div>
             <main>
    <header>
       <div class="topp">
        <h4>Pacotes com preços promocionais. <span>Aproveite agora</span>.</h4>
        </div> 

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
    </header>
    <section>
        <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Campos do Jordão (SP)</strong></p>
                    <p class="description">Com o horizonte repleto de picos verde-esmeralda, Campos do Jordão é um excelente destino nas montanhas localizado nos trópicos.</p>
                    <p class="price">Pacotes a partir de R$ 350</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={jordao} alt="Campos do Jordão" />
                </div>
            </div>
        </div> 
        <div></div>
    </section>
    
    <section>
        <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Fortaleza (CE)</strong></p>
                    <p class="description">Não há nada melhor do que férias em Fortaleza  para relaxar o corpo e a mente. O som das ondas do mar e o cheiro do ar salgado com certeza são revigorantes.</p>
                    <p class="price">Pacotes a partir de R$ 383</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={fortaleza} alt="foto de paisagem Campos Fortaleza"/>
                </div>
            </div>
        </div>
        <div></div>
    </section>
    
    <section>
        <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Gramado (RS)</strong></p>
                    <p class="description">A principal cidade da Serra Gaúcha é um dos melhores destinos turísticos do país. Romântica, charmosa, cheia de cultura, belas paisagens, atrações e ótima culinária.</p>
                    <p class="price">Pacotes a partir de R$ 407</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={gramado} alt="foto de paisagem Gramado"/>
                </div>
            </div>
        </div>
    </section>
    
    <header>
        <div class="internacionais">
            <h1 className="h1" ><strong>Internacionais</strong></h1>
        </div> 
    </header>
    
    <section>
        <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Orlando</strong></p>
                    <p class="description">É a segunda cidade mais visitada no mundo devido às suas atrações turísticas como o Walt Disney World Resort, Universal Orlando Resort, SeaWorld, entre outros.</p>
                    <p class="price">Pacotes a partir de R$ 600</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={orlando} alt="foto de paisagem Orlando"/>
                </div>
            </div>
        </div>
        <div></div>
    </section>
    
    <section>
        <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Buenos Aires</strong></p>
                    <p class="description">Cheia de atrações, pontos turísticos, parques e passeios. Quem se apaixona pelo lugar faz questão de voltar outras vezes, fazer novos roteiros e conhecer novos lugares.</p>
                    <p class="price">Pacotes a partir de R$ 724</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={buenos} alt="foto de paisagem Buenos Aires"/>
                </div>
            </div>
        </div>
        <div></div>
    </section>
    
    <section>
       <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Londres</strong></p>
                    <p class="description">A principal cidade da Serra Gaúcha é um dos melhores destinos turísticos do país. Romântica, charmosa, cheia de cultura, belas paisagens, atrações e ótima culinária.</p>
                    <p class="price">Pacotes a partir de R$ 837</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={londres} alt="foto de paisagem Londres"/>
                </div>
            </div>
        </div> 
    </section>
    
    <header>
        <div class="internacionais">
            <h1 className="h1" ><strong>Descobertas</strong></h1>
        </div> 
    </header>
    
    <section>
        <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Tulum, México</strong></p>
                    <p class="description">É um lugar excelente para quem busca contato com a natureza, tranquilidade e praias com pouco movimento.</p>
                    <p class="price">Pacotes a partir de R$ 1000</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={mexico} alt="foto de paisagem México"/>
                </div>
            </div>
        </div>
        <div></div>
    </section>
    
    <section>
        <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Ilhas Phi Phi, Tailândia</strong></p>
                    <p class="description">Elas são um absurdo de lindas! Compostas de uma coleção de praias turquesa com cliffs de pedra calcária.</p>
                    <p class="price">Pacotes a partir de R$ 1200</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={tailandia} alt="foto de paisagem Tailândia"/>
                </div>
            </div>
        </div>
        <div></div>
    </section>
    
    <section>
        <div class="container text-center">
            <div class="row">
                <div class="col text">
                    <p class="tittle"><strong>Whitehaven, Austrália</strong></p>
                    <p class="description">Se você consultar qualquer lista de praias mais lindas do mundo, com certeza constará Whitehaven Beach, na Austrália.</p>
                    <p class="price">Pacotes a partir de R$ 1320</p>
                    <p><a><Link className="but" to="/Login">Escolher</Link></a></p>
                </div>
                <div class="col image">
                    <img src={haven} alt="foto de paisagem Grécia"/>
                </div>
            </div>
        </div>
    </section>
    
    </main>
    <footer>
        <p>Todos os direitos reservados</p>
    </footer>

        </div>
    )
}

export default Promocionais;