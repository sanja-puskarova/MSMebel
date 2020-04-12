import React from "react";
import {useHistory} from "react-router";
import ForumItem from "../ForumItem/forumItem";
import "./forumList.css";

const ForumList=(props)=>{

    const history = useHistory();

    const handleAddClick = (e) =>{
        e.preventDefault();
        history.push("/forum/new");
    };

    if(props.forums.length===0){
        return(
            <div>
                <h2>Please give us feedback</h2>
                <button className="btn btn-outline-secondary" onClick={handleAddClick}>
                    <span><strong>Add comment and rating</strong></span>
                </button>
            </div>
        );
    }else {
        return (
            <div className="row">
                <h3 className="text-upper text-center m-3">We appreciate your thoughts!</h3>
                <button className="btn btn-outline-secondary marginLeft" onClick={handleAddClick}>
                    <span><strong>Add comment and rating</strong></span>
                </button>
                <div className="table-responsive">
                    <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.forums.map((item,index)=>{
                            return (
                                <ForumItem key={index} forum={item} forums={props.forums} onDelete={props.onDelete}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );

    }

};

export default ForumList;
