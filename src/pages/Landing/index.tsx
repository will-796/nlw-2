import React from 'react';
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'





function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logo proffy" />
                    <h2>sua plataforma de estudos online</h2>

                </div>
                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassIcon} alt="Estudar"/>
                        Estudar
                    </a>
                </div>
                <span className="total-conections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    )

}

export default Landing;
