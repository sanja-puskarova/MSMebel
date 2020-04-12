import React, {Component} from "react";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import image from "../../../images/Cozy-Traditional-Living-Room.jpg"
import "../../Products/ProductRow/productRow.css";


class DecorationRow extends Component {
    render() {
        return (
            <Card className="cardShadow">
                <Card.Img variant="top" src={require('../../../images/Decorations/' + this.props.decoration.picUrl)}/>
                <Card.Body>
                    <Card.Title>{this.props.decoration.name}</Card.Title>
                    <Card.Text>
                        <div className="row">
                            <b>Color</b>: {this.props.decoration.color}
                        </div>
                        <div className="row">
                            <b>Type</b>: {this.props.decoration.type}
                        </div>
                        <div className="row">
                            <b>Price</b>: {this.props.decoration.price}$
                        </div>
                    </Card.Text>
                    <div className="row ml-lg-2">
                        {this.edit()}
                        {this.remove()}
                        {this.details()}
                    </div>
                </Card.Body>
            </Card>
        )
    }

    edit() {
        return (
            <Link className="btn btn-sm btn-secondary mr-2"
                  to={`/decorations/${this.props.decoration.name}/edit`}>
                <span><strong>Edit</strong></span>
            </Link>
        )
    }

    remove() {
        return (
            <button className="btn btn-sm btn-outline-secondary mr-2"
                    onClick={() => this.props.onDelete(this.props.decoration.name)}>
                <span><strong>Remove</strong></span>
            </button>
        )
    }

    details() {
        return (
            <Link className="btn btn-sm btn-outline-dark"
                  to={`/decorations/${this.props.decoration.name}/details`}>
                <span><strong>Details</strong></span>
            </Link>
        )
    }
}
export default DecorationRow;