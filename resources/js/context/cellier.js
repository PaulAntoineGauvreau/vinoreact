import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import Http from "../HttpClient";
import uiReducer from "../reducers/uiReducer";

// création du contexte Cellier
const CellierContext = createContext();

// fonction pour rendre disponible le cellier dans l'app tree
export const CellierProvider = ({ children }) => {
    const [{ loading }, dispatch] = useReducer(uiReducer, { loading: true });

    // récupérer toutes les bouteilles d'un cellier par Id
    const getBouteillesCellier = async (cellierId) => {
        dispatch({ type: "LOADING" });
        const bouteilles = await Http.get(`bouteilles/cell/${cellierId}`);
        setTimeout(() => dispatch({ type: "LOADED" }), 500);
        return bouteilles;
    };

    // récupérer une bouteille par id
    const getBouteille = async (bouteilleId) => {
        dispatch({ type: "LOADING" });
        const bouteille = await Http.get(`bouteilles/${bouteilleId}`);
        setTimeout(() => dispatch({ type: "LOADED" }), 500);
        return bouteille;
    };

    // rechercher dans le wiki
    const searchWiki = (search) => Http.get(`search/${search}`);

    // ajouter une bouteille au cellier
    const addBouteille = (bouteille) =>
        Http.post("bouteilles/create", bouteille);

    // récupérer les catégories
    const getCategories = () => Http.get('categories')

    // upload image
    const uploadImage = async (img) => {
        const formData = new FormData();
        formData.append("file", img);
        formData.append("upload_preset", "knxwwgoa");

        return axios.post(
            "https://api.cloudinary.com/v1_1/vino-project/image/upload",
            formData
        );
    };

    return (
        <CellierContext.Provider
            value={{
                getBouteillesCellier,
                getBouteille,
                addBouteille,
                searchWiki,
                uploadImage,
                getCategories,
                loading,
            }}
        >
            {children}
        </CellierContext.Provider>
    );
};

export const useCellier = () => {
    return useContext(CellierContext);
};
