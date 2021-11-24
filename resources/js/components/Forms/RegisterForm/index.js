import React from "react";
import FormInput from "../FormInput";
import { Button } from "../../styles/Button.styled";
import { Form } from "../../styles/Form.styled";
import { Legend } from "../../styles/Form.styled";
import useForm from "../../../hooks/useForm";
import { useUser } from "../../../context/user";
// validation du formulaire
import registerFormValidate from "./registerFormValidate";

const RegisterForm = () => {
    const { register } = useUser();

    // INITIAL FORM STATE
    const initialValues = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    };

    // FORM LOGIC ON SUBMIT
    const registerUser = async (values) => {
        await register(values);
        //navigate("/vino");
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
        <Form onSubmit={handleFormSubmit}>
            <Legend>Nouveau membre</Legend>
            <FormInput
                type="text"
                id="name"
                name="name"
                label="Nom Usager"
                value={values.name}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.name}
            />

            <FormInput
                type="email"
                id="email"
                name="email"
                label="Courriel"
                value={values.email}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.email}
            />

            <FormInput
                type="password"
                id="password"
                name="password"
                label="Mot de passe"
                value={values.password}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.password}
            />

            <FormInput
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                label="Confirmer le mot de passe"
                value={values.password_confirmation}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.password_confirmation}
            />
            <Button
                type="submit"
                bg="transparent"
                color="#fff"
                borderColor="#fff"
                bgHover="white"
                colorHover="maroon"
                disabled={isSubmitting}
            >
                CRÉER
            </Button>
        </Form>
    );
};

export default RegisterForm;
