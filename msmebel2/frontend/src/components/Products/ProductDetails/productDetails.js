import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import productService from "../../../service/axiosProductService";
import image from "../../../images/Cozy-Traditional-Living-Room.jpg"
import "../ProductAdd/productAdd.css";
import {Animated} from "react-animated-css";
import "./productDetails.css";
import Card from "react-bootstrap/Card";

const showProductDetails=()=>{
   const {id}=useParams();
   const[product,setProduct]=useState({});
   const[image,setImage]=useState({});

   useEffect(()=>{
      productService.fetchProduct(id).then((data)=>{
          setProduct(data.data);
      })
   },[]);
    let pic='sofa.jpg';

    if(product.picUrl) {
        pic = product.picUrl;
   }

   return(
       <div className="container bg-light">
           <div className="row bg-white">
               <div className="col-md-6">
                   <img src={require('../../../images/Products/'+pic)} className="pics"/>
                   <br/>
                   <Link to={"/products"} className="btn btn-submit mt-2">
                       <span><strong>Back</strong></span>
                   </Link>
               </div>
               <div className="col-lg-6">
                   <div className="row">
                       <div className="col-md-12">
                           <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                           <h1>{product.name}</h1>
                           </Animated>
                       </div>

                   </div>
                   <div className="row mt-3">
                       <div className="col-md-12">
                           <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                           <h3>Description: {product.description}</h3>
                           </Animated>
                       </div>
                   </div>
                   <div className="row mt-3">
                       <div className="col-md-12">
                           <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                           <h3>Price: {product.price}</h3>
                           </Animated>
                       </div>
                   </div>
               </div>
           </div>


       </div>


   );

};
export default showProductDetails;