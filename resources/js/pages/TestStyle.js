import { Button, ButtonBackUp } from '../components/styles/Button.styled';
import { Input, Select } from '../components/styles/Input.styled';
//import BouteilleBlackLogo from "../assets/images/bouteilleBlack.png";
import Chevron from "../assets/svg/chevron.svg";
import Accordeon from "../components/Accordeon";

const TestStyle = () => {
    const test = () => {
        console.log("test");
    };

    const backTop = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            {/* <Button
                onClick={() => test()}
                bg="#fff"
                color="#303031"
                colorHover="#fff"
                bgHover="#303031"
            >
                AJOUTER
            </Button>
            <Button bg="#303031" color="#fff">
                BOIRE
            </Button >
            <Input placeholder="Nom Usager" ></Input> */}

            <Accordeon titre='Description' content="Vin mousseu bon"></Accordeon>
            <Accordeon titre='Modification' content={  <Select>
                    <option>Cellier</option>
                </Select>}>  
            </Accordeon>
            <Accordeon titre='Notes' content="Je suis un amateur alors je connais ça"></Accordeon>
           
           {/* /// <img src={BouteilleBlackLogo} alt="logo" />  */}
            <ButtonBackUp onClick={()=> backTop()}> <img src={Chevron} alt="chevron" /> </ButtonBackUp>
        </div>
    );
};

export default TestStyle;
