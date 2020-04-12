import axios from "../custom-axios/axios";

const ForumService = {
    fetchForums: () => {
        return axios.get(`/api/forum`);
    },
    addForum:(forum) =>{
        return axios.post(`/api/forum`,forum);
    },
    deleteForum:(id)=>{
        return axios.delete(`/api/forum/${id}`);
    }
};
export default ForumService;