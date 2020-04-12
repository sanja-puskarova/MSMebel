import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import ProductService from "../../../service/axiosProductService";
import "./productAdd.css";
import Form from "react-bootstrap/Form";

const productAdd=(props)=>{
    const history = useHistory();
    const [product, setProduct] = useState({});
    const clearState = {
        name:"",
        width:0,
        description:"",
        type:"",
        picUrl:"",
        price:0
    };

    const onSubmit=(e)=>{
        const newProduct={
            "name":document.getElementById("name").value,
            "width":document.getElementById("width").value,
            "description":document.getElementById("description").value,
            "type":document.getElementById("type").value,
            "picUrl":"sofa5.jpg",
            "price":document.getElementById("price").value
        };
        props.onAddNewProduct(newProduct);
        history.push("/products");
    };

    const cancelButton = () => {
        return (
            <div className=" col-sm-3  text-center">
                <Link to={"/products"} className="btn btn-cancel text-upper">
                    Cancel
                </Link>
            </div>
        )
    };

    const saveButton = () => {
        return (
            <div className="offset-sm-1 col-sm-3  text-center mr-4">
                <button type="submit" className="btn-submit  text-upper">
                    Save
                </button>
            </div>
        )
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setProduct({...product, [paramName]: paramValue});
    };


    const productAddField=()=>{
        return(
        <Form className="form" onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label >Name of product</Form.Label>
                <Form.Control type="text" id="name" name="name" value={product.name} placeholder="Product name" />
            </Form.Group>
            <Form.Group >
                <Form.Label >Width of product</Form.Label>
                <Form.Control type="number" id="width" name="width" value={product.width} placeholder="Product width" onChange={onChangeHandler}/>
            </Form.Group>
            <Form.Group >
                <Form.Label >Product description</Form.Label>
                <Form.Control type="text" id="description" name="description" value={product.description} placeholder="Product description" onChange={onChangeHandler}/>
            </Form.Group>
            <Form.Group >
                <Form.Label >Type of product</Form.Label>
                <Form.Control type="text" id="type" name="type" value={product.type} placeholder="Product type" onChange={onChangeHandler} />
            </Form.Group>
            <Form.Group >
                <Form.Label >Price</Form.Label>
                <Form.Control type="number" id="price" name="price" value={product.price} placeholder="Price" onChange={onChangeHandler} />
            </Form.Group>
            {buttons()}
        </Form>
        )
    };

    const buttons = () => {
        return (
            <div className="form-group row">
                {saveButton()}
                {cancelButton()}
            </div>
        )
    };
    return (
        <div className="container" >
            <div className="center_div">
            {productAddField()}
            </div>
        </div>
    )

};
export default productAdd;