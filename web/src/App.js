import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

export default function App() {
    return(
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do GitHub</label>
                        <input name="github_username" id="github_username" required/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required/>
                    </div>
                    
                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required/>
                        </div>
                        
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required/>
                        </div>
                    </div>
                    
                    <button type="submit">Salvar</button>
                    
                </form>
            </aside>


            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/43181684?s=460&v=4" alt="Marcos"/>
                            <div className="user-info">
                                <strong>Marcos Prysthon</strong>
                                <span>ReactJS, ReactNative, NodeJS</span>
                            </div>
                        </header>
                        <p>Estudante de Ciência da Computação na UFPE</p>
                        <a href="https://github.com/MarcosPrysthon" target="blank">Perfil do GitHub</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/43181684?s=460&v=4" alt="Marcos"/>
                            <div className="user-info">
                                <strong>Marcos Prysthon</strong>
                                <span>ReactJS, ReactNative, NodeJS</span>
                            </div>
                        </header>
                        <p>Estudante de Ciência da Computação na UFPE</p>
                        <a href="https://github.com/MarcosPrysthon" target="blank">Perfil do GitHub</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/43181684?s=460&v=4" alt="Marcos"/>
                            <div className="user-info">
                                <strong>Marcos Prysthon</strong>
                                <span>ReactJS, ReactNative, NodeJS</span>
                            </div>
                        </header>
                        <p>Estudante de Ciência da Computação na UFPE</p>
                        <a href="https://github.com/MarcosPrysthon" target="blank">Perfil do GitHub</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}