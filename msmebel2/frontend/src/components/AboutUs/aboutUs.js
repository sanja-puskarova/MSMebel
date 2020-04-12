import React from "react";
import image from "../../images/aboutUs2.jpg";
import "./aboutUs.css"
import Chart from "react-google-charts";


const AboutUs = () => {


    return (

        <div className="container">
            <div className="row">
                <img src={image} className="img-fluid"/>
                <div className="row mt-2">
                    <div className="col-3">
                        <i className="fa fa-user-circle"/>
                    </div>
                    <div className="col-9 text-center">
                        <h3>SERVICE</h3>
                        <p>You're not alone. From browsing, to ordering, to delivery... we're here to help you every
                            step of the way. Our Customer Care Team can answer any questions you may have, as well as
                            provide personalized assistance with: scheduling, availability, bulk orders, custom orders
                            and delivery options.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-shopping-cart"/>
                    </div>
                    <div className="col-9 text-center">
                        <h3>SELECTION</h3>
                        <p>Shop our extensive selection of quality furniture and home decor for every room, plus a vast
                            assortment of mattresses, at prices that can't be beat! Find
                            everything you're looking for from the comfort of your home.</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-check"/>
                    </div>
                    <div className="col-9 text-center">
                        <h3>SATISFACTION</h3>
                        <p>We work hard to make sure our store is packed with quality furniture and mattresses at value
                            unmatched by any other store. In addition to this, we broaden our offerings by offering
                            special orders. Ask us for details on our email for
                            Special Orders.</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-automobile"/>
                    </div>
                    <div className="col-9 text-center">
                        <h3>DELIVERY</h3>
                        <p>
                            Our Delivery network is fast, reliable and FREE on hundreds of items.
                            Delivery is free on all purchases in our country, plus if you create a room with multiple
                            products
                            you get additional discount.
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row mt-5">
                <div className="center_div">
                    <h2 className="text-center">Statistics about the growth of our company</h2>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="BarChart"
                        loader={<div>Data is loading</div>}
                        data={[
                            ['Cities', 'Stores in 2009', 'Stores in 2019'],
                            ['Skopje', 0, 2],
                            ['Ohrid', 0, 1],
                            ['Strumica', 2, 5],
                            ['Stip', 1, 3],
                            ['Radovis', 1, 2],
                        ]}
                        options={{
                            title: '',
                            chartArea: {width: '50%'},
                            backgroundColor: "",
                            colors: ['darkslategrey', 'grey'],
                            hAxis: {
                                title: 'Total stores',
                                minValue: 0,
                                "viewWindow": {
                                    "min": 0,
                                    "max": 5
                                }
                            },
                            vAxis: {
                                title: 'City',
                            },
                        }}
                        // For tests
                        rootProps={{'data-testid': '1'}}
                    />
                </div>
            </div>
        </div>
    )


};
export default AboutUs;