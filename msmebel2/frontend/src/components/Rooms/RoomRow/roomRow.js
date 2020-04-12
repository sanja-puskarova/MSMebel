import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import image from "../../../images/Cozy-Traditional-Living-Room.jpg";
import {Link} from "react-router-dom";
import RoomService from "../../../service/axiosRoomService";
import "./roomRow.css";

class Room extends Component {
    render() {
        return (
            <Card className="cardShadow2">
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{this.props.room.name}</Card.Title>
                    <Card.Text>
                        <div className="row">
                            <b>description</b>:{this.props.room.description}
                        </div>
                        <div className="row">
                            <b>discount</b>:{this.props.room.discount}%
                        </div>
                        <div className="row">
                            <b>total</b>:{this.props.room.total}$
                        </div>
                    </Card.Text>
                    <div className="row ml-lg-2">
                        <div className="col-6">
                            {this.remove()}
                        </div>
                        <div className="col-6">
                            {this.addToCart()}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }

    remove() {
        return (
            <button className="btn btn-sm  btn-outline-secondary"
                    onClick={() => this.props.onDelete(this.props.room.name)}>
                <span><strong>Remove</strong></span>
            </button>
        )
    }

    addToCart() {
        return (
            <button className="btn btn-sm btn-outline-secondary">
                <span><strong>Purchase</strong></span>
            </button>
        )
    }

};

export default Room;