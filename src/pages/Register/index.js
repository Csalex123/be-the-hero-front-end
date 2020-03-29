import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from  '../../assets/logo.svg';

export default class Register extends Component{
    render(){
        return(
            <div className="register-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be the Hero" />

                        <h1>Cadastro</h1>
                        <p>Faça seu cadasto, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041"/>
                            Voltar para o Logon
                        </Link>

                    </section>

                    <form>
                        <input placeholder="Nome da ONG"/>
                        <input type="email" placeholder="E-mail"/>
                        <input placeholder="Whatsapp"/>

                        <div className="input-group">
                            <input placeholder="Cidade" />
                            <input placeholder="Uf" style={{width: 80}} />
                        </div>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        )
    }
} 