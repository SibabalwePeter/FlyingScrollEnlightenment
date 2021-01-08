import * as React from 'react';
import '../Styles/Test.css';
import RealEstate from '../Pictures/RealEstate.jpeg';
import Accounting from '../Pictures/Accounting.jpeg';
import Science from '../Pictures/Science.jpeg';

const Slideshow = () => {
    return (
        <div>
            <style>
                {
                    `.item {
                        max-width: 100%;
                        height: 250px;
                    }`
                }
            </style>
            <div className="container">
                <h2>Carousel Example</h2>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={Science} alt="Los Angeles" />
                            <div className="carousel-caption">
                                <p>Flying Scroll Enlightenment (Pty) Ltd is a career development
                                programme, education system programme, and youth development programme.</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src={Accounting} alt="Chicago" />
                            <div className="carousel-caption">
                                <p>Its holistic model system designed to break the cycle of
                                    poverty and generational repetition of low educational attainment.</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src={RealEstate} alt="New York" />
                            <div className="carousel-caption">
                                <p>We love the Big Apple!</p>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Slideshow;