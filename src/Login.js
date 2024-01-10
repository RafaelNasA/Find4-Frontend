import React from "react";
import {Link} from "react-router-dom";

function Login(){
    return(
        <div>
            <body>
                <main>
                <div class="containerr">
                <form className="fo" >
                <h4 className="h44" >Quase lá!</h4>
                <input className="in" placeholder="Digite seu nome" type="text"/>
                <input className="in" placeholder="Digite seu email" type="text"/>
                <a className="aa"><Link className="ab" to="/PosLogin">Pronto</Link></a>
                </form>
                </div>
                </main>
            </body>
        </div>
    )
}

export default Login;