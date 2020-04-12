import axios from "../custom-axios/axios";

const ProductService = {
    fetchProducts: () => {
        return axios.get(`/api/products`);
    },
    addProduct:(product) =>{
        return axios.post(`/api/products`,product);
    },
    deleteProduct:(id)=>{
        return axios.delete(`/api/products/${id}`);
    },
    fetchProduct:(id)=>{
        return axios.get(`/api/products/${id}`);
    },
    updateProduct:(product)=>{
      return axios.patch(`/api/products/${product.id}`,product);
    }
};
export default ProductService;