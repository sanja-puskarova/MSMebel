import axios from "../custom-axios/axios";

const RoomService = {
    fetchRooms: () => {
        return axios.get(`/api/rooms`);
    },
    addRoom:(room) =>{
        return axios.post(`/api/rooms`,room);
    },
    deleteRoom:(id)=>{
        return axios.delete(`/api/rooms/${id}`);
    },
    fetchRoom:(id)=>{
        return axios.get(`/api/rooms/${id}`);
    },
    updateRoom:(room)=>{
        return axios.patch(`/api/products/${room.id}`,room);
    }
};
export default RoomService;