import DecorationRow from "../DecorationsRow/decorationsRow";
import React, {useState} from "react";
import {useHistory} from "react-router";
import Pagination from "../../Pagination/pagination";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import {Animated} from "react-animated-css";

let flag = false;
const GetDecorations = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [search, setSearch] = useState();

    const history = useHistory();

    const handleAddClick = (e) =>{
        e.preventDefault();
        history.push("/decorations/new");
    };

    if(props.decorations.length===0){
        return(
            <div>
                <h2>There are no decorations.</h2>
                <button className="btn btn-outline-secondary" onClick={handleAddClick}>
                    <span><strong>Add new decoration</strong></span>
                </button>
            </div>
        );
    }else {

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPages = props.decorations.slice(indexOfFirstPost, indexOfLastPost);
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        const filteredDecorations = currentPages.filter(decoration => {
            if (!flag) {
                return currentPages;
            } else {
                return decoration.type.toLowerCase().indexOf(search) !== -1
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
                            <h5 className="text-upper text-center mtSearch">Search decorations by type</h5>
                            <Form inline>
                                <FormControl type="text" className="input-group mtSearch1" placeholder="Search..."
                                             value={search} onChange={onChangeSearch}/>
                            </Form>
                        </div>
                        <div className="row">
                            <h5 className="text-upper text-center mtSearch">Types of decorations we have:</h5>
                            <ul className="float-left">
                                <Animated animationIn="lightSpeedIn" animationInDuration={1500} isVisible={true}>
                                <i className="fa fa-arrow-right float-left">  Pillow</i><br/>
                                <i className="fa fa-arrow-right float-left">  Blanket</i><br/>
                                <i className="fa fa-arrow-right float-left">  Throws</i><br/>
                                <i className="fa fa-arrow-right float-left">  Plants</i><br/>
                                </Animated>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-6">
                                <h4 className="text-upper text-center m-3">Decorations</h4>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-outline-secondary mt-2" onClick={handleAddClick}>
                                    <span><strong>Add new decoration</strong></span>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            {filteredDecorations.map((item,index)=>{
                                return (
                                    <div className="col-4 mt-2">
                                        <DecorationRow key={index} decoration={item} decorations={props.decorations} onDelete={props.onDelete}/>
                                    </div>
                                );
                            })}
                        </div>
                        <br/>
                        <div className="align-items-center">
                            <Pagination postsPerPage={postsPerPage} totalPosts={props.decorations.length}
                                        paginate={paginate}/>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        );

    }
};

export default GetDecorations;