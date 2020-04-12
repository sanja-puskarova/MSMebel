import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import productAdd from "../../Products/ProductAdd/productAdd";
import "../../Products/ProductAdd/productAdd.css";
import "../../Rooms/RoomRow/roomRow.css";

const forumAdd=(props)=>{
    const history = useHistory();
    const [forum, setForum] = useState({});

    const clearState = {
        comment:"",
        name:"",
        rating:0
    };

    const onSubmit=(e)=>{
        const newForum={
            "name":document.getElementById("name").value,
            "rating":document.getElementById("rating").value,
            "comment":document.getElementById("comment").value,
        };
        props.onAddNewForum(newForum);
        history.push("/forum");
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setForum({...forum, [paramName]: paramValue});
    };

    const forumNameField = () => {
        return (<div className="form-group row">
                <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Input your full name:</label>
                <div className="col-sm-6">
                    <input type="text"
                           className="form-control"
                           id="name"
                           name="name"
                           placeholder="Full name"
                           required
                           maxLength={50}
                           value={forum.name}
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const forumRatingField = () => {
        return (<div className="form-group row">
                <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Add rating 0-5:</label>
                <div className="col-sm-6">
                    <input type="number"
                           className="form-control"
                           id="rating"
                           name="rating"
                           placeholder="Store Rating"
                           required
                           maxLength={50}
                           value={forum.rating}
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const forumCommentField = () => {
        return (<div className="form-group row">
                <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Add comment:</label>
                <div className="col-sm-6">
                    <textarea type="text"
                           className="form-control"
                           id="comment"
                           name="comment"
                           placeholder="Comment"
                           required
                           maxLength={50}
                           value={forum.comment}
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const cancelButton = () => {
        return (
            <div className=" col-sm-3  text-center">
                <Link to={"/forum"} className="btn btn-cancel ml-2 text-upper">
                    Cancel
                </Link>
            </div>
        )
    };

    const saveButton = () => {
        return (
            <div className="offset-sm-1 col-sm-3 mr-4 text-center">
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
                {cancelButton()}
            </div>
        )
    };

    return (
        <div className="row align-self-center">
            <div className="center_div">
            <form className="forma" onSubmit={onSubmit}>
                <h4 className="text-upper text-left p-4">We value your feedback</h4>
                {forumNameField()}
                {forumRatingField()}
                {forumCommentField()}
                <div className="form-group row">
                </div>
                {buttons()}
            </form>
            </div>
        </div>
    )
};
export default forumAdd;