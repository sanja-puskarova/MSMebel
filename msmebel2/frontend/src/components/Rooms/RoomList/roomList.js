import RoomRow from "../RoomRow/roomRow";
import {Link} from "react-router-dom";
import React from "react";
import {useHistory} from "react-router";
import "./roomList.css";
import {bounceIn} from 'animate.css';
import {Animated} from "react-animated-css";

const GetRooms = (props) => {

    const history = useHistory();

    const handleAddClick = (e) => {
        e.preventDefault();
        history.push("/rooms/new");
    };

    if (props.rooms.length === 0) {
        return (
            <div>
                <h2>There are no rooms.</h2>
                <button className="btn btn-outline-secondary" onClick={handleAddClick}>
                    <span><strong>Add new room</strong></span>
                </button>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Animated animationIn="lightSpeedIn" animationInDuration={1500} isVisible={true}>                        <div className="text-center ml-4 textFont">
                            <h4>Your rooms are presented below and only you can see
                                them!</h4>
                            <br/>
                            <h5>By adding more products to your room, you get more discount which is calculated by our
                                discount
                                formula!</h5><br/>
                            <h3>Happy shopping!</h3>
                        </div>
                    </Animated>
                    <div className="row">
                        {props.rooms.map((item, index) => {
                            return (
                                <div className="col-3 mt-2">
                                    <RoomRow key={index} room={item} rooms={props.products} onDelete={props.onDelete}/>
                                </div>
                            );
                        })}
                    </div>
                    <button className="btn btn-outline-secondary mt-5" onClick={handleAddClick}>
                        <span><strong>Add new room</strong></span>
                    </button>
                </div>
                <br></br>
            </div>
        );

    }
};

export default GetRooms;