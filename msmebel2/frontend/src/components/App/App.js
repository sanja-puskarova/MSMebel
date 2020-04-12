import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "../Header/header";
import HomePage from "../HomePage/homePage";
import ProductService from "../../service/axiosProductService";
import RoomService from "../../service/axiosRoomService";
import ForumService from "../../service/axiosForumService";
import Product from "../Products/ProductRow/product";
import ProductList from "../Products/ProductList/productList";
import ProductAdd from "../Products/ProductAdd/productAdd";
import ProductDetails from "../Products/ProductDetails/productDetails";
import ProductEdit from "../Products/ProductEdit/productEdit";
import RoomAdd from "../Rooms/RoomAdd/roomAdd";
import RoomList from "../Rooms/RoomList/roomList";
import ForumAdd from "../Forum/ForumAdd/forumAdd";
import ForumList from "../Forum/ForumList/forumList";
import DecorationsService from "../../service/axiosDecorationsService";
import DecorationAdd from "../Decorations/DecorationsAdd/decorationAdd";
import DecorationsList from "../Decorations/DecorationList/decorationList";
import DecorationEdit from "../Decorations/DecorationEdit/decorationEdit";
import DecorationDetails from "../Decorations/DecorationDetails/decorationDetails";
import Footer from "../Footer/footer";
import AboutUs from "../AboutUs/aboutUs";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            rooms: [],
            forums: [],
            decorations: [],
        }
    }

    componentDidMount() {
        this.getProducts();
        this.getRooms();
        this.getForums();
        this.getDecorations();
    }

    getProducts = () => {
        ProductService.fetchProducts().then(result => {
            this.setState(() => {
                return {
                    "products": result.data
                }
            })
        });
    };

    getDecorations = () => {
        DecorationsService.fetchDecorations().then(result => {
            this.setState(() => {
                return {
                    "decorations": result.data
                }
            })
        });
    };

    getForums = () => {
        ForumService.fetchForums().then(result => {
            this.setState(() => {
                return {
                    "forums": result.data
                }
            })
        });
    };

    getRooms = () => {
        RoomService.fetchRooms().then(result => {
            this.setState(() => {
                return {
                    "rooms": result.data
                }
            })
        });
    };


    addProduct = (product) => {
        ProductService.addProduct(product).then(result => {
            const newProduct = result.data;
            this.setState((prevState) => {
                const products = [...prevState.products, newProduct];
                return {
                    "products": products
                }
            });
        });
    };

    addDecoration = (decoration) => {
        DecorationsService.addDecoration(decoration).then(result => {
            const newDecoration = result.data;
            this.setState((prevState) => {
                const decorations = [...prevState.decorations, newDecoration];
                return {
                    "decorations": decorations
                }
            });
        });
    };

    addRoom = (room) => {
        RoomService.addRoom(room).then(result => {
            const newRoom = result.data;
            this.setState((prevState) => {
                const rooms = [...prevState.rooms, newRoom];
                return {
                    "rooms": rooms
                }
            });
        });
    };

    onDelete = (id) => {
        ProductService.deleteProduct(id).then(() => {
            this.setState((prevState) => {
                const products = prevState.products.filter(i => i.name !== id);
                return {
                    "products": products
                }
            });
        });
    };

    onDeleteRoom = (id) => {
        RoomService.deleteRoom(id).then(() => {
            this.setState((prevState) => {
                const rooms = prevState.rooms.filter(i => i.name !== id);
                return {
                    "rooms": rooms
                }
            });
        });
    };

    onEdit = (product) => {
        ProductService.updateProduct(product).then(data => {
            const newProduct = data.data;
            this.setState((prevState) => {
                const products = prevState.products.map(i => i.id === newProduct.id ? newProduct : i);
                return {
                    "products": products
                }
            });
        });
    };

    onEditDecoration = (decoration) => {
        DecorationsService.updateDecoration(decoration).then(data => {
            const newDecoration = data.data;
            this.setState((prevState) => {
                const decorations = prevState.decorations.map(i => i.id === newDecoration.id ? newDecoration : i);
                return {
                    "decorations": decorations
                }
            });
        });
    };

    addForum = (forum) => {
        ForumService.addForum(forum).then(result => {
            const newForum = result.data;
            this.setState((prevState) => {
                const forums = [...prevState.forums, newForum];
                return {
                    "forums": forums
                }
            });
        });
    };

    onDeleteForum = (id) => {
        ForumService.deleteForum(id).then(() => {
            this.setState((prevState) => {
                const forums = prevState.forums.filter(i => i.name !== id);
                return {
                    "forums": forums
                }
            });
        });
    };

    onDeleteDecoration = (id) => {
        DecorationsService.deleteDecoration(id).then(() => {
            this.setState((prevState) => {
                const decorations = prevState.decorations.filter(i => i.name !== id);
                return {
                    "decorations": decorations
                }
            });
        });
    };

    render() {
        const routing = (
            <Router>
                <Header/>
                <main role="main" className="mt-3">
                    <div className="container">
                        <Switch>
                            <Route path={"/"} exact><HomePage/></Route>
                            <Route path={"/products"} exact>
                                <ProductList products={this.state.products} onDelete={this.onDelete}/>
                            </Route>
                            <Route path={"/products/new"} exact>
                                <ProductAdd onAddNewProduct={this.addProduct}/>
                            </Route>
                            <Route path={"/products/:id/details"} exact>
                                <ProductDetails/>
                            </Route>
                            <Route path={"/products/:id/edit"} exact>
                                <ProductEdit onEditProduct={this.onEdit}/>
                            </Route>
                            <Route path={"/rooms/new"} exact>
                                <RoomAdd onAddNewRoom={this.addRoom}/>
                            </Route>
                            <Route path={"/rooms"} exact>
                                <RoomList rooms={this.state.rooms} onDelete={this.onDeleteRoom}/>
                            </Route>
                            <Route path={"/forum/new"} exact>
                                <ForumAdd onAddNewForum={this.addForum}/>
                            </Route>
                            <Route path={"/forum"} exact>
                                <ForumList forums={this.state.forums} onDelete={this.onDeleteForum}/>
                            </Route>
                            <Route path={"/decorations/new"} exact>
                                <DecorationAdd onAddNewDecoration={this.addDecoration}/>
                            </Route>
                            <Route path={"/decorations"} exact>
                                <DecorationsList decorations={this.state.decorations}
                                                 onDelete={this.onDeleteDecoration}/>
                            </Route>
                            <Route path={"/decorations/:id/edit"} exact>
                                <DecorationEdit onEditDecoration={this.onEditDecoration}/>
                            </Route>
                            <Route path={"/decorations/:id/details"} exact>
                                <DecorationDetails/>
                            </Route>
                            <Route path={"/about"} exact>
                                <AboutUs/>
                            </Route>
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </Router>
        );

        return (
            <div className="App">
                {routing}
            </div>
        );
    }
}

export default App;
