import * as React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import Footer from './Footer';

const Slideshow =() =>{
  return(
    <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide"></img>
            <div className="mask rgba-black-light"></div>
          </div>
          <div className="carousel-caption">
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="view">
          <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide"></img>
          <div className="mask rgba-black-strong"></div>
        </div>
        <div className="carousel-caption">
          <h3 className="h3-responsive">Strong mask</h3>
          <p>Secondary text</p>
        </div>
      </div>
      <div className="carousel-item">
      <div className="view">
        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
          alt="Third slide"></img>
        <div className="mask rgba-black-slight"></div>
        </div>
        <div className="carousel-caption">
          <h3 className="h3-responsive">Slight mask</h3>
          <p>Third text</p>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

const Home = () => {
  return (

    <div>
      <Slideshow />
      <br></br>
      <br></br>
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Career Development Programme</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
              <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Education System Programme</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
              <CardText>This programme close the achievement gap, particularly for less privilege learners, creates opportunity for educational officials to invest outside….</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Youth Development Programme</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
              <CardText>This programme specifically designed to address the intergenerational outcomes, we are impacting; for example, high school drop-out, teen pregnancy and gap-years learners…..</CardText> 
            </CardBody>
          </Card>
        </CardDeck>
        <Footer/>
    </div>
  );
};

export default Home;
