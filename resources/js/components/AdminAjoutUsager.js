import React, { useEffect, useState } from "react";
import { AjoutModifUsager, Countainer } from "./styles/AjoutModifUsager.styled";
//import {Form} from "./styles/Form.styled";
import { Button } from "./styles/Button.styled";
import EditionAjoutFormInput from "./Forms/AjouterBouteille/EditionAjoutInput";
import { useUser } from "../context/user";
import useForm from "../hooks/useForm";
import registerFormValidate from "./Forms/RegisterForm/registerFormValidate";
import registerFormValidateUpdate from "./Forms/RegisterForm/registerFormValidateUpdate";
import Admin from "../pages/Admin";
import { useNavigate, useParams } from "react-router";
import { ConstructionOutlined } from "@mui/icons-material";


// composante Pour ajouter et modifier usager
const AdminAjoutUsager = () => {
    const { user } = useUser();
    const { register } = useUser();
    const { getUsager} = useUser();
    const { updateUsager } = useUser();
    const { id } = useParams();
    const [usager, setUsagerState] = useState({});

    
    
    useEffect(() => {
        let isSubscribed = true;
        getUsager(id).then(({data}) => {
            //const usager = {};
            const usager = data;
           
           // console.log(usager, 'usager')
            console.log(data, 'data')
            setUsagerState(usager)
        });
        return () => (isSubscribed = false);
    }, []);


    if (usager.id) {

        

        console.log('1')
        const initialValues = {
            id : usager.id || "",
            name:  usager.name || "",
            email:  usager.email || "" ,
        };
        console.log('2')
    
        
        console.log(usager.name, 'name')
        //console.log(setUsager)
        const registerUser = async (values) => {
            const data = await updateUsager(values);
                //RouteAdmin('user')
        };


        console.log(values , "values")

    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        handleBlur,
        isSubmitting,
    } = useForm(initialValues, registerUser, registerFormValidateUpdate);

    console.log(errors, "error")

        return (
            <Admin>
                <Countainer>
                    <div>
                        <h4>Modifier Usager</h4>
                    </div>
                    <AjoutModifUsager onSubmit={handleFormSubmit}>

                        <EditionAjoutFormInput
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nom"
                            value={values?.name}
                            onChange={handleFormChange}
                            error={errors?.name}
                        />
                        <EditionAjoutFormInput
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Courriel"
                            value={values?.email}
                            onChange={handleFormChange}
                            error={errors?.email}
                        />
                        <Button
                        type="submit"
                        bg="#303031"
                        color="#fff"
                        bgHover="white"
                        colorHover="#303030"
                        disabled={isSubmitting}
                    >
                    Modifier
                    </Button>
                </AjoutModifUsager>
            </Countainer>
        </Admin>
        )
    

    } else {

        

        const initialValues = {
            id : usager?.id || "",
            name:  usager?.name || "",
            email:  usager?.email || "",
            privilege_id: 1,
            password: "",
            nom_cellier: "",
            password_confirmation: "",
        };
    
    
        const registerUser = async (values) => {
            const data = await register(values);
            RouteAdmin('user')
        };


    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        handleBlur,
        isSubmitting,
    } = useForm(initialValues, registerUser, registerFormValidate);
        return (
            <Admin>
                <Countainer>
                    <div>
                        <h4>Ajout Usager</h4>
                    </div>
                    <AjoutModifUsager onSubmit={handleFormSubmit}>
                        <EditionAjoutFormInput
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nom"
                            value={values.name}
                            onChange={handleFormChange}
                            error={errors?.name}
                        />
                        <EditionAjoutFormInput
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Courriel"
                            value={values.email}
                            onChange={handleFormChange}
                            error={errors?.email}
                        />
                        <EditionAjoutFormInput
                            type="text"
                            id="nom_cellier"
                            name="nom_cellier"
                            placeholder="Nom cellier"
                            value={values.nom_cellier}
                            onChange={handleFormChange}
                            error={errors?.nom_cellier}
                        />
                        <EditionAjoutFormInput
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            placeholder="Mot de passe"
                            onChange={handleFormChange}
                            onBlur={handleBlur}
                            error={errors?.password}
                        />
                        <EditionAjoutFormInput
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder="Confirmer le mot de passe"
                            value={values.password_confirmation}
                            onChange={handleFormChange}
                            onBlur={handleBlur}
                            error={errors?.password_confirmation}
                        />
                        <Button
                            type="submit"
                            bg="#303031"
                            color="#fff"
                            bgHover="white"
                            colorHover="#303030"
                            disabled={isSubmitting}
                        >
                        AJOUTER
                        </Button>
                    </AjoutModifUsager>
            </Countainer>
        </Admin>
        )
    
    }

}
export default AdminAjoutUsager;