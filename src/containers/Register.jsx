import React, { useState } from "react";
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom";

const Register = (props) => {
    const [form, setValues] = useState({
        email: "",
        name: "",
        pwd: "",
    });
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      props.registerRequest(form);
      props.history.push('/');
      console.log(form);
    }
    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                    <input
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        name="pwd"
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
    );
};

const mapDispatchToProps = {
  registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);
