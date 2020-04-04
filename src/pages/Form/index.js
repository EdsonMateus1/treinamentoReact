import React from 'react';
import Logo from '../../assets/logo.png';
import './styles.css';


export default function Form() {

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
                <form>
                    <div className="form-input">
                        <input placeholder="Titulo da idea"></input>
                        <input placeholder="Categoria"></input>
                    </div>
                    <textarea placeholder="Descricao"></textarea>
                    <button className="button2" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    )

}