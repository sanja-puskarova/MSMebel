import axios from "../custom-axios/axios";

const DecorationsService = {
    fetchDecorations: () => {
        return axios.get(`/api/decorations`);
    },
    addDecoration:(decoration) =>{
        return axios.post(`/api/decorations`,decoration);
    },
    deleteDecoration:(id)=>{
        return axios.delete(`/api/decorations/${id}`);
    },
    fetchDecoration:(id)=>{
        return axios.get(`/api/decorations/${id}`);
    },
    updateDecoration:(decoration)=>{
        return axios.patch(`/api/decorations/${decoration.id}`,decoration);
    }
};
export default DecorationsService;