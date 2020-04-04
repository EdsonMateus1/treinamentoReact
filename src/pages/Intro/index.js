import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import '../Global.css';
import './styles.css'

export default function Intro() {
    const [color, setcolor] = useState('#FFEFD5')
    const styles = {
        backgroundColor: color
    };
    return (
        <div style={styles} className="container-pricipal">
            <section className='intro-container'>
                <header>
                    <img src={Logo} alt="uma imagem" ></img>
                </header>
                <main>
                    <p>
                        Ficar em casa em períodos longos, não deve ser nada fácil.
                    </p>
                    <p>
                        Iremos catalogar ideias, brincadeiras, jogos, filmes, livros, cursos, dicas e tudo que for necessário para tornar esse momento mais interessante.
                    </p>
                    <p>
                        Comece clicando em ver ideias para ver as  ideias cadastradas e contribua adicioando a sua ideia.
                    </p>
                </main>
                <section>

                    <Link to="/register" className="button">+ Castrar ideas</Link>
                    <button onClick={() => {
                        setcolor('#FFEFD5')
                    }} style={{
                        backgroundColor: '#FFEFD5',
                    }} className="button">Mudar cor</button>

                    <button onClick={() => {
                        setcolor('#FF69B4')
                    }} style={{
                        backgroundColor: '#FF69B4'
                    }} className="button">Mudar cor</button>
                </section>

                <footer>
                    <span>
                        Com♥️<a href="http://rocketseat.com.br">Rocketseat</a>
                    </span>
                </footer>
            </section>
            <section className='last-ideas'>
                <div className="idea">
                    <img src="https://image.flaticon.com/icons/svg/2728/2728900.svg" alt="uma imagem" />
                    <div className="conteudo">
                        <h3>Cursos onlines</h3>
                        <p>Estudo</p>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <a href="#">Ir para a ideas</a>
                    </div>
                </div>
                <div className="idea">
                    <img src="https://image.flaticon.com/icons/svg/2760/2760528.svg" alt="uma imagem" />
                    <div className="conteudo">
                        <h3>Cuidados</h3>
                        <p>Saude</p>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <a href="#">Ir para a ideas</a>
                    </div>
                </div>
                <div className="idea">
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/2690/2690140.svg" alt="uma imagem" />
                    <div className="conteudo">
                        <h3>Ouvir musicas</h3>
                        <p>Musicas</p>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <a href="#">Ir para a ideas</a>
                    </div>
                </div>
            </section>
        </div>
    );
}