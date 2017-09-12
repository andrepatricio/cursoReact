import React, { Component } from 'react';
import './css/side-menu.css';
import './css/pure-min.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      listaDeAutores: [{nome: "André", email:"andrepatricio2@gmail.com", senha: "meupau"}]
    };
  }

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
        </a>
        <div id="menu">
          <div className="pure-menu">
              <a className="pure-menu-heading" href="#">Company</a>
              <ul className="pure-menu-list">
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
              </ul>
          </div>
        </div>
        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                  <input id="nome" type="text" name="nome" value="" placeholder="Nome" />                  
                </div>
                <div className="pure-control-group">
                  <input id="email" type="email" name="email" placeholder="Email" value=""  />                  
                </div>
                <div className="pure-control-group">
                  <input id="senha" type="password" name="senha" placeholder="Senha"  />                                      
                </div>
                <div className="pure-control-group">    
                  <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                </div>
              </form>
            </div>  
            <div>            
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.listaDeAutores.map(function(autor){
                      return (
                        <tr>
                          <td>{autor.nome}</td>
                          <td>{autor.email}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table> 
            </div>             
          </div>
        </div> 
      </div>     
    );
  }
}

export default App;
