import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewIncident() {

    const [title, setIncident] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleRegisterIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,

        }


      try {
         await api.post('cases', data, {
            headers: {
                Authorization: ongId,
            }
        });   
        
        history.push("/profile");

      } catch (error) {
        alert('Erro ao cadastrar o caso')
      }

      
    }

    return (
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                            Voltar para home
                        </Link>

                </section>

                <form onSubmit={handleRegisterIncident}>
                    <input value={title}
                        onChange={(e) => setIncident(e.target.value)}
                        placeholder="Título do caso" />

                    <textarea value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descrição" />

                    <input type="number" value={value}
                        onChange={(e) => setValue(e.target.value)} 
                    placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}