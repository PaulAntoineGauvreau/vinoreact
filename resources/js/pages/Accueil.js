import React from "react";
//import User from "../apis/User";
import { Input, Select } from '../components/styles/Input.styled';
import { AccueilMain } from '../components/styles/Accueil.styled';
import BouteilleBlackLogo from "../../../public/svg/bouteilleBlack.png";
import TacheHaut from "../../../public/svg/tacheHaut.svg";
import TacheBas from "../../../public/svg/tacheBas.svg";
import LogoVino from "../../../public/svg/logo.svg";


const Accueil = () => {

    return (
        
        <AccueilMain>

                <img src={TacheHaut} alt="Tache Rouge haut" /> 
                <h2>Bienvenue dans ton cellier</h2>
                <img src={BouteilleBlackLogo} alt="Logo Bouteille vino" /> 
                <img src={LogoVino} alt="Logo Vino" /> 
                <Select>
                    <option>Sélectionne ton cellier</option>
                </Select>
                <img src={TacheBas} alt="Tache Rouge bas" /> 

        </AccueilMain>
    )
}

export default Accueil;