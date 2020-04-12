import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import "./roomAdd.css";
import "../../Products/ProductAdd/productAdd.css";

const roomAdd = (props) => {
    const history = useHistory();
    const [room, setRoom] = useState({});
    let [productce, setProductce] = useState([]);

    const clearState = {
        name: "",
        description: "",
        total: 0,
        discount: 0,
        products: []
    };

    const save = (e) => {
        e.preventDefault();
        setProductce(productce.concat(document.getElementById("product").value))
        document.getElementById("product").value = "/";
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newRoom = {
            "name": document.getElementById("name").value,
            "description": document.getElementById("description").value,
            "products": productce
        };
        props.onAddNewRoom(newRoom);
        history.push("/rooms");
    };

    const onChangeHandler1 = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setRoom({...room, [paramName]: paramValue});
    };

    const saveButton = () => {
        return (
            <div className="offset-sm-1 col-sm-3 mr-4 text-center">
                <button type="submit" className="btn-submit  text-upper">
                    Save
                </button>
            </div>
        )
    };
    const cancelButton = () => {
        return (
            <div className=" col-sm-3 ml-2 text-center">
                <Link to={"/rooms"} className="btn btn-cancel text-upper">
                    Cancel
                </Link>
            </div>
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

    const inputProducts = () => {
        return (
            <div className="form-group row">
                <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Add new product by their correct
                    name!</label>
                <div className="col-sm-6">
                    <input type="text"
                           className="form-control"
                           id="product"
                           name="product"
                           placeholder="Product name"
                           required
                           maxLength={50}
                           onChange={onChangeHandler1}/>
                    <button onClick={save} className="btn-section">Save product</button>
                </div>
            </div>
        )
    }

    const roomName = () => {
        return (<div className="form-group row pt-3">
                <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Room Name</label>
                <div className="col-sm-6">
                    <input type="text"
                           className="form-control"
                           id="name"
                           name="name"
                           placeholder="Room Name"
                           required
                           maxLength={50}
                           value={room.name}
                           onChange={onChangeHandler1}/>
                </div>
            </div>
        )
    };

    const roomDescription = () => {
        return (<div className="form-group row">
                <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Room Description</label>
                <div className="col-sm-6">
                    <input type="text"
                           className="form-control"
                           id="description"
                           name="description"
                           placeholder="Room Description"
                           required
                           maxLength={50}
                           value={room.description}
                           onChange={onChangeHandler1}/>
                </div>
            </div>
        )
    };


    return (
        <div className="container">
            <div className="center_div">
                <form className="forma" onSubmit={onSubmit}>
                    <h4 className="text-center">Create room</h4>
                    {roomName()}
                    {roomDescription()}
                    {inputProducts()}
                    {buttons()}
                </form>
            </div>
        </div>
    )
};
export default roomAdd;