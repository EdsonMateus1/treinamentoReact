import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import api from '../../service/api';
import { useHistory } from 'react-router-dom';
import './styles.css';


export default function Form() {
    const [title, settitle] = useState('');
    const [category, setcategory] = useState('');
    const [description, setdescription] = useState('');
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            title,
            category,
            description
        };

        try {
            await api.post('/idea/register', data);
            alert('cadastro realizado com sucesso');
            history.push('/')
        } catch{
            alert('erro no cadastro verifique se os campos esta preenchidos');
        };
    };
    return (
        <div className="form-container">
            <section className="intro-form-container">
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
                        Cadastre sua idea,coloque um titulo,uma categoria que sua idea se encaixe e a decricao da sua idea.
                    </p>    
                </main>
            </section>

            <div className="content">
                <h1>Nova idea</h1>
                <form onSubmit={handleRegister}>
                    <div className="form-input">
                        <input value={title} 
                            onChange={e => settitle(e.target.value)}
                            placeholder="Titulo da idea"></input>
                        <input value={category}
                            onChange={e => setcategory(e.target.value)}
                            placeholder="Categoria"></input>
                    </div>
                    <textarea value={description}
                        onChange={e => setdescription(e.target.value)}
                        placeholder="Descricao"></textarea>
                    <button className="button2" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
};
