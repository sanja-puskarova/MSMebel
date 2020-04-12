import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/living_rooms_room-grid_4.18.19.jpg";
import image2 from "../../images/pic2.jpg";
import image3 from "../../images/pic3.jpg";
import image4 from "../../images/pic4.jpg";
import './homePage.css';
import {Link} from 'react-router-dom';

const homePage = () => {

    function AboutMe() {
        window.location.href="/about"
    }

    const mapSection = () => {
        return (
            <div className="row container">
                <iframe className="map-section" width={600} height={450} frameBorder="0" scrolling="no" marginHeight="0"
                        marginWidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5982.589893057702!2d22.6534889!3d41.4328214!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smk!4v1586134695657!5m2!1sen!2smk">
                </iframe>
            </div>
        )
    };

    const carouselSection = () => {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={image4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    };

    return (
        <div>
            {carouselSection()}
            <br/>
            <div className="row">
                <div className="col-6">
                    {mapSection()}
                </div>
                <div className="col-6">
                    <p>If you want to know more about us, click the button below</p>
                    <button  className="btn-section" onClick={AboutMe}>
                        <span>About us</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default homePage;