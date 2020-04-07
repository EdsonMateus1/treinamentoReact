import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import '../Global.css';
import './styles.css'

export default function Intro() {
    const [color, setcolor] = useState('#FFEFD5');
    const [idea, setIdea] = useState([])
    const styles = {
        backgroundColor: color
    };

    useEffect(() => {
        api.get('idea')
            .then(res => {
               // console.log(res.data);
               // console.log(typeof res.data);
                setIdea(res.data)
            })
    }, [])

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
                {idea.map(idea =>
                    <div key={idea._id} className="idea">
                        <img src="https://image.flaticon.com/icons/svg/2728/2728900.svg" alt="uma imagem" />
                        <div className="conteudo">
                            <h3>{idea.title}</h3>
                            <p>{idea.category}</p>

                            <div className="description">
                                {idea.description}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};