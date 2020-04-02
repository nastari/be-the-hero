import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon () {

    return (
        
                <div className="logon-container">
                    
                    <section className="formulary">

                            <img src={logo} alt="logo"/>

                            <form>

                                    <h1 style = {{ marginTop: 15 }}>Faça seu logon</h1>

                                    <input placeholder ="Sua ID"/>

                                    <button type="submit" className='button'> Entrar </button>


                                    <Link to="/register" className='coadjuvante-link'>
                                        <FiLogIn size= {16} color= "red" />
                                    Não tenho Cadastro
                                    </Link>

                            </form>

                    </section>

                    <img src={heroesImg} alt="Heroes"/>

                </div>

    );
}