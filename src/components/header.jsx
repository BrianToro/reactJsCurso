import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions/index";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;
    const handleLogout = (event) => {
        props.logoutRequest({});
    };
    return (
        <header
            className={
                location.pathname === "/login" ||
                location.pathname === "/register"
                    ? "header header__login-register"
                    : "header"
            }
        >
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ? (
                        <img src={gravatar(user.email)} alt={user.email} />
                    ) : (
                        <img src={userIcon} alt="User icon" />
                    )}
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser ? (
                        <li>
                            <a href="/"> Cuenta: {user.email}</a>
                        </li>
                    ) : null}
                    {hasUser ? (
                        <li>
                            <Link to="/login" onClick={handleLogout}>
                                Cerrar Sesion
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/login">Iniciar sesion</Link>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchtoProps = {
    logoutRequest,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
