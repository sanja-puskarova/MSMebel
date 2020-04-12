import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {useParams} from "react-router";
import decorationService from "../../../service/axiosDecorationsService";
import Form from "react-bootstrap/Form";

const decorationEdit = (props) => {

    const {id} = useParams();
    const [decoration, setDecoration] = useState({});
    const history = useHistory();

    const clearState = {
        id: id,
        name: "",
        color: "",
        description: "",
        type: "",
        picUrl: "",
        price: 0
    };

    useEffect(() => {
        decorationService.fetchDecoration(id).then(data => {
            setDecoration(data.data);
        })
    }, []);

    const onReset = () => {
        setDecoration(clearState);
    };

    const onSubmit = (e) => {
        const newDecoration = {
            "id": id,
            "name": document.getElementById("name").value,
            "color": document.getElementById("color").value,
            "description": document.getElementById("description").value,
            "type": document.getElementById("type").value,
            "picUrl": document.getElementById("picurl").value,
            "price": document.getElementById("price").value
        };
        props.onEditDecoration(newDecoration);
        history.push("/decorations");
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
                <Link to={"/decorations"} className="btn btn-cancel text-upper">
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

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setDecoration({...decoration, [paramName]: paramValue});
    };

    const decorationEditField = () => {
        return (
            <Form className="form" onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Name of decoration</Form.Label>
                    <Form.Control type="text" id="name" name="name" value={decoration.name}
                                  placeholder="Decoration name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Color of decoration</Form.Label>
                    <Form.Control type="text" id="color" name="color" value={decoration.color}
                                  placeholder="Decoration color" onChange={onChangeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Decoration description</Form.Label>
                    <Form.Control type="text" id="description" name="description" value={decoration.description}
                                  placeholder="Decoration description" onChange={onChangeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type of decoration</Form.Label>
                    <Form.Control type="text" id="type" name="type" value={decoration.type}
                                  placeholder="Decoration type" onChange={onChangeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Url picture of decoration</Form.Label>
                    <Form.Control type="text" id="picurl" name="picurl" value={decoration.picUrl} placeholder="Url"
                                  onChange={onChangeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" id="price" name="price" value={decoration.price} placeholder="Price"
                                  onChange={onChangeHandler}/>
                </Form.Group>
                {buttons()}
            </Form>
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
        <div className="container">
            <div className="center_div">
                {decorationEditField()}
            </div>
        </div>
    )
};
export default decorationEdit;