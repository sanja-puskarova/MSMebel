import ProductRow from "../ProductRow/product";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router";
import Pagination from "../../Pagination/pagination";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./productList.css"
import {Animated} from "react-animated-css";

let flag = false;
const GetProducts = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const history = useHistory();
    const [search, setSearch] = useState();


    const handleAddClick = (e) => {
        e.preventDefault();
        history.push("/products/new");
    };

    if (props.products.length === 0) {
        return (
            <div>
                <h2>There are no products.</h2>
                <button className="btn btn-outline-secondary" onClick={handleAddClick}>
                    <span><strong>Add new product</strong></span>
                </button>
            </div>
        );
    } else {

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPages = props.products.slice(indexOfFirstPost, indexOfLastPost);
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        const filteredProducts = currentPages.filter(product => {
            if (!flag) {
                return currentPages;
            } else {
                return product.type.toLowerCase().indexOf(search) !== -1
            }
        });

        const onChangeSearch = (e) => {
            flag = true;
            return setSearch(e.target.value)
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="row">
                            <h5 className="text-upper text-center mtSearch">Search products by type</h5>
                            <Form inline>
                                <FormControl type="text" className="input-group mtSearch1" placeholder="Search..."
                                             value={search} onChange={onChangeSearch}/>
                            </Form>
                        </div>
                        <div className="row">
                            <h5 className="text-upper text-center mtSearch">Types of products we have:</h5>
                            <Animated animationIn="lightSpeedIn" animationInDuration={1500} isVisible={true}>
                            <ul className="float-left">
                                <i className="fa fa-arrow-right float-left">  Bed</i><br/>
                                <i className="fa fa-arrow-right float-left">  Table</i><br/>
                                <i className="fa fa-arrow-right float-left">  Sideboard</i><br/>
                                <i className="fa fa-arrow-right float-left">  Sofa</i><br/>
                            </ul>
                            </Animated>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-6">
                                <h4 className="text-upper text-center m-3">Products</h4>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-outline-secondary mt-2" onClick={handleAddClick}>
                                    <span><strong>Add new product</strong></span>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            {filteredProducts.map((item, index) => {
                                return (
                                    <div className="col-4 mt-2">
                                        <ProductRow key={index} product={item} products={props.products}
                                                    onDelete={props.onDelete}/>
                                    </div>
                                );
                            })}
                        </div>
                        <br/>
                        <div className="align-items-center">
                            <Pagination postsPerPage={postsPerPage} totalPosts={props.products.length}
                                        paginate={paginate}/>
                        </div>

                    </div>
                </div>
                <br></br>
            </div>
        );

    }
};

export default GetProducts;