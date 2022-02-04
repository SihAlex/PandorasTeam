import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import fadeInAnimation from '../animation/fadeInAnimation';

interface Props {}

const standartStyle = {
    color: 'white',
    textDecoration: 'none'
};

const activeStyle = {
    display: 'none'
};

const Nav = styled.nav`
    background-color: black;
    padding: 1rem;
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 30%;
    display: flex;
    justify-content: space-around;
    opacity: 0;
    animation: ${fadeInAnimation} 1s ease-in-out forwards 1.5s;
    text-transform: uppercase;
`;

const Header: React.FC<Props> = () => {
    return (
        <Nav>
            <Ul>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : standartStyle
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/services"
                    style={({ isActive }) =>
                        isActive ? activeStyle : standartStyle
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) =>
                        isActive ? activeStyle : standartStyle
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contacts"
                    style={({ isActive }) =>
                        isActive ? activeStyle : standartStyle
                    }
                >
                    Contacts
                </NavLink>
            </Ul>
        </Nav>
    );
};

export default Header;
