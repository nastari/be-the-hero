import React from 'react';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

export default function Register() {

    return (

        <div className="register-container">

            <div className="content">
                <section>
        
                        <img src={logo} alt="Be the Hero"/>
                        <h1> Cadastrar </h1>
                        <p> Quer saber do que soej qlero meorm sem oquer!</p>
                        <Link to="/" className="coadjuvante-link">
                            < FiArrowLeft size = {18} color= "red" />
                            Voltar ao inicio
                        </Link>
                </section>
                <form >
                    <input placeholder="Nome da ONG"/>
                    <input placeholder="E-mail" type='email'/>
                    <input placeholder="Whats App"/>

                    <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{ width: 80 , marginLeft: 8}}/>
                    
                    </div>
                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>

        </div>

    )

}