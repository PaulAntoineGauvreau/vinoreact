import styled from "styled-components";

export const NavBarCountainer = styled.nav`

    position: sticky;
    top: 0;
    display:flex;
    justify-content: space-between;
    padding:20px;
    box-shadow: rgba(0, 0, 0, 0.10) 1.95px 1.95px 2.6px;
    background:#fff;
    z-index:1;

    div {
        display:flex;
        flex-direction: column;
        cursor: pointer;

        ${({ translateDown }) => console.log(translateDown)}
        div {
            width:20px;
            background:#303031;
            height: 3px;
            margin:0.09375rem;
        }

        div:first-child {
            transition: transform 0.6s ease;
            transform: rotate(${({ rotate }) => rotate || '0'}) translate(-${({ translateDown }) => translateDown || '0'} , ${({ translateDown }) => translateDown || '0'} );
        }
        
        div:nth-of-type(2){
            transition: opacity 0.6s ease;
            opacity: ${({ display }) => display || '100%'};
        }
        div:nth-of-type(3){
            transition: transform 0.6s ease;
            transform: rotate(${({ rotateNegative}) => rotateNegative|| '0'}) translate(${({ translateUp }) => translateUp || '0'} , ${({ translateUp }) => translateUp || '0'} );
        }




    }

    img {
        max-height: 20px;
    }

    img:last-child {
        cursor: pointer;
    }
`