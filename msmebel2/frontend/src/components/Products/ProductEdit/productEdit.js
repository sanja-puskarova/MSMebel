import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {useParams} from "react-router";
import productService from "../../../service/axiosProductService";
import Form from "react-bootstrap/Form";

const productEdit = (props) => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();

    const clearState = {
        id: id,
        name: "",
        width: 0,
        description: "",
        type: "",
        picUrl: "",
        price: 0
    };

    useEffect(() => {
        productService.fetchProduct(id).then(data => {
            setProduct(data.data);
        })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const editedProduct = {
            "id": id,
            "name":document.getElementById("name").value,
            "width":document.getElementById("width").value,
            "description":document.getElementById("description").value,
            "type":document.getElementById("type").value,
            "picUrl":document.getElementById("picurl").value,
            "price":document.getElementById("price").value
        };
        props.onEditProduct(editedProduct);
        history.push("/products");
    };

    const onReset = () => {
        setProduct(clearState);
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setProduct({...product, [paramName]: paramValue});
    };


    const productEditField=()=>{
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
                    <Form.Label >Picture Url</Form.Label>
                    <Form.Control type="text" id="picurl" name="picurl" value={product.picUrl} placeholder="Url" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group >
                    <Form.Label >Price</Form.Label>
                    <Form.Control type="number" id="price" name="price" value={product.price} placeholder="Price" onChange={onChangeHandler} />
                </Form.Group>
                {buttons()}
            </Form>
        )
    };

    const resetButton = () => {
        return (
            <div className=" col-sm-3  text-center">
                <button type="button" className="btn-reset text-upper" onClick={onReset}>
                    Reset
                </button>
            </div>
        )
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
            <div className="offset-sm-1 col-sm-3  text-center">
                <button type="submit" className="btn-submit text-upper">
                    Save
                </button>
            </div>
        )
    };

    const buttons = () => {
        return (
            <div className="form-group row">
                {saveButton()}
                {resetButton()}
                {cancelButton()}
            </div>
        )
    };


    return (
        <div className="container" >
            <div className="center_div">
                {productEditField()}
            </div>
        </div>
    )

};
export default productEdit;