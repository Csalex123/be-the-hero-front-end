import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';
//7bc9fbd6
export default function Profile() {
    const [incidents, setIncidents] = useState([]);



    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    if(ongId === null && ongId === null ) {
        history.push('/');
    }

    useEffect(() => {
        (async () => {
            const { data } = await api.get('profile', {
                headers: {
                    Authorization: ongId,
                }
            })
            setIncidents(data.incidents);
        })()
    }, [ongId]);

    async function handleDeleteIncendent(id) {
        try {
            await api.delete(`cases/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (error) {
            alert("Erro ao deletar caso")
        }
    }


    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero" />
                <span>Bem vinda, {ongName}</span>

                <Link to="/incidents/new" className="button">
                    Cadastrar nova caso
                    </Link>
                <button onClick={handleLogout} type="button"><FiPower size={18} color="#e02041" /></button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incidents.id}>
                        <strong>CASE:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={()=> {handleDeleteIncendent(incident.id)}} type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

