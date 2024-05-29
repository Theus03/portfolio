import styled from "styled-components"
import moon from "../assets/moon.svg"
import React from 'react';

const ThemeSwitcher = () => (
    <div className="container-switch-theme" onClick={() => {}}>
        <img src={moon}  alt="Trocar para Dark Mode" className="img-switch-theme" />
        <h3 className="text-switch-theme">Dark</h3>
    </div>
);

export default ThemeSwitcher