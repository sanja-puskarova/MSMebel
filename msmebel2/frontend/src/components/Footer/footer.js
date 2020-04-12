import React from "react";
import "./footer.css";
const Footer = () => {

    const FooterSection = () => {
        return (
            <footer className="mt-2 bg-dark">
                <div>
                    <div className="container">
                        <div className="row py-2 d-flex align-items-center">
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 text-white">Get connected with us on social networks!</h6>
                            </div>
                            <div className="col-md-6 col-lg-7 text-center text-md-right">
                                <a href="https://www.facebook.com/%D0%9C%D0%B5%D0%B1%D0%B5%D0%BB-%D0%9C%D0%B0%D0%BA%D0%BE-%D0%A1%D1%82%D0%B8%D0%BB-363006523815424"><i
                                    className="fa fa-facebook text-white mr-4"></i></a>
                                <a href="#"><i className="fa fa-twitter text-white mr-4"></i></a>
                                <a href="#"><i className="fa fa-google-plus text-white mr-4"></i></a>
                                <a href="#"><i className="fa fa-instagram text-white mr-4"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lightGray">
                    <div className="container text-center text-md-left mt-5">
                        <div className="row mt-3 text-dark">
                            <div className="col-md-4 mb-4 marginCols">
                                <h6 className="text-uppercase font-weight-bold">MS MEBEL</h6>
                                <hr/>
                                <i className="fa fa-truck text-dark"></i> Free Delivery And Installation<br/>
                                <i className="fa fa-money"></i> Best Prices And Perfect Quality<br/>
                                <i className="fa fa-life-ring"></i> Warranty And Support
                            </div>
                            <div className="col-md-4 mb-4 marginCols">
                                <h6 className="text-uppercase font-weight-bold">ABOUT</h6>
                                <hr/>
                                <a href="/about" className="text-dark"><i className="fa fa-user"></i> About us</a><br/>
                                <a href="/forum" className="text-dark"><i className="fa fa-comment"></i> Forum</a>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 marginCols">
                                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                <hr/>
                                <p>
                                    <i className="fa fa-home mr-3"></i>Ул.Климент Охридски бб, Струмица</p>
                                <p>
                                    <i className="fa fa-envelope mr-3"></i>sanjapuskarova98@gmail.com</p>
                                <p>
                                    <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center backgroundColor py-3">© 2020 Copyright</div>
            </footer>
        )
    };

    return (
        <div>
            {FooterSection()}
        </div>
    )

};
export default Footer;