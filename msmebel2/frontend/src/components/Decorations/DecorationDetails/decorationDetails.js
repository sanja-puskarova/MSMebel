import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import image from "../../../images/Cozy-Traditional-Living-Room.jpg"
import decorationService from "../../../service/axiosDecorationsService";
import "../../Products/ProductAdd/productAdd.css";
import "../../Products/ProductDetails/productDetails.css";
import {Animated} from "react-animated-css";


const DecorationDetails=()=>{
    const {id}=useParams();
    const[decoration,setDecoration]=useState({});

    useEffect(()=>{
        decorationService.fetchDecoration(id).then((data)=>{
            setDecoration(data.data);
        })
    },[]);

    let pic='pillow3.jpg';

    if(decoration.picUrl) {
        pic = decoration.picUrl;
    }

    return(
        <div className="container bg-light">
            <div className="row bg-white">
                <div className="col-md-6">
                    <img src={require('../../../images/Decorations/'+pic)} className="pics"/>
                    <Link to={"/decorations"} className="btn btn-submit mt-2">
                        <span><strong>Back</strong></span>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-12">
                            <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                            <h1>{decoration.name}</h1>
                            </Animated>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                            <h3>Color: {decoration.color}</h3>
                            </Animated>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                            <h3>Description: {decoration.description}</h3>
                            </Animated>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Animated animationIn="lightSpeedIn" animationInDuration={1600} isVisible={true}>
                            <h3>Price: {decoration.price}$</h3>
                            </Animated>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DecorationDetails;