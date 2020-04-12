import React, {Component} from "react";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import image from "../../../images/Cozy-Traditional-Living-Room.jpg"
import "./productRow.css";

class Product extends Component {
    render() {
        return (
            <Card className="cardShadow">
                <Card.Img variant="top" src={require('../../../images/Products/' + this.props.product.picUrl)}/>
                <Card.Body>
                    <Card.Title>{this.props.product.name}</Card.Title>
                    <Card.Text>
                        <div className="row">
                            <b>Measurements</b>:{this.props.product.width}cm
                        </div>
                        <div className="row">
                            <b>Type</b>:{this.props.product.type}
                        </div>
                        <div className="row">
                            <b>Price</b>:{this.props.product.price}$
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
                  to={`/products/${this.props.product.name}/edit`}>
                <span><strong>Edit</strong></span>
            </Link>
        )
    }

    remove() {
        return (
            <button className="btn btn-sm btn-outline-secondary mr-2"
                    onClick={() => this.props.onDelete(this.props.product.name)}>
                <span><strong>Remove</strong></span>
            </button>
        )
    }

    details() {
        return (
            <Link className="btn btn-sm btn-outline-dark"
                  to={`/products/${this.props.product.name}/details`}>
                <span><strong>Details</strong></span>
            </Link>
        )
    }
}
export default Product;