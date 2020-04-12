import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import "../../Products/ProductAdd/productAdd.css"

const decorationAdd=(props)=>{
    const history = useHistory();
    const [decoration, setDecoration] = useState({});
    const clearState = {
        name:"",
        color:"",
        type:"",
        description:"",
        picUrl:"",
        price:0
    };


    const onSubmit=(e)=>{
        const newDecoration={
            "name":document.getElementById("name").value,
            "color":document.getElementById("color").value,
            "description":document.getElementById("description").value,
            "type":document.getElementById("type").value,
            "picUrl":"pillow6.jpg",
            "price":document.getElementById("price").value
        };
        props.onAddNewDecoration(newDecoration);
        history.push("/decorations");
    };

    const cancelButton = () => {
        return (
            <div className=" col-sm-3  text-center">
                <Link to={"/decorations"} className="btn btn-cancel text-upper">
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

    const decorationField=()=>{
        return(
            <Form className="form" onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label >Name of decoration</Form.Label>
                    <Form.Control type="text" id="name" name="name" value={decoration.name} placeholder="Decoration name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label >Color of decoration</Form.Label>
                    <Form.Control type="text" id="color" name="color" value={decoration.color} placeholder="Decoration color" onChange={onChangeHandler}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label >Decoration description</Form.Label>
                    <Form.Control type="text" id="description" name="description" value={decoration.description} placeholder="Decoration description" onChange={onChangeHandler}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label >Type of decoration</Form.Label>
                    <Form.Control type="text" id="type" name="type" value={decoration.type} placeholder="Decoration type" onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group >
                    <Form.Label >Price</Form.Label>
                    <Form.Control type="number" id="price" name="price" value={decoration.price} placeholder="Price" onChange={onChangeHandler} />
                </Form.Group>
                {buttons()}
            </Form>
        )
    }

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setDecoration({...decoration, [paramName]: paramValue});
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
                {decorationField()}
            </div>
        </div>
    )
};
export default decorationAdd;