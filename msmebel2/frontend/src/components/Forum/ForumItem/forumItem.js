import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ForumItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.forum.name}</td>
                <td>{this.props.forum.rating}</td>
                <td>{this.props.forum.comment}</td>
                {this.actions()}
            </tr>
        )
    }

    actions() {
        return (
            <td>

                {this.remove()}
            </td>
        )
    }

    // edit() {
    //     return (
    //         <Link className="btn btn-sm btn-secondary mr-2"
    //               to={`/ingredients/${this.props.ingredient.name}/edit`}>
    //             <span className="fa fa-edit"/>
    //             <span><strong>Edit</strong></span>
    //         </Link>
    //     )
    // }

    remove() {
        return (
            <button className="btn btn-sm btn-outline-secondary mr-2"
                    onClick={() => this.props.onDelete(this.props.forum.name)}>
                <span className="fa fa-remove"/>
                <span><strong>Remove</strong></span>
            </button>
        )
    }
}

export default ForumItem;