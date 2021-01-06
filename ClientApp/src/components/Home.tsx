import React, { useState } from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../Styles/Home.css';
import Science from '../Pictures/Farming.jpeg';
import Farming from '../Pictures/Farming.jpeg';
import Law from '../Pictures/IT.jpeg';

const items = [
  {
    id: 1,
    caption: '',
    altText: 'Flying Scroll Enlightenment (Pty) Ltd is a career development'
    + 'programme, education system programme, and youth development'
    + 'programme. Its holistic model system designed to break the cycle of'
    + 'poverty and generational repetition of low educational attainment.'
  },
  {
    id: 2,
    caption: ' ',
    altText: 'Our career development programme provides a method for schools to '
    +'systematise guidelines and learner experiences around various categories '
    + 'encompass virtually all occupations from entry through professional levels.'
    + 'These alignment of occupations are used as an organizing tool for...'
  },
  {
    id: 3,
    caption: '',
    altText: 'Flying Scroll Enlightenment holistic educational system model is driven '
      + 'by Investment in Human Capital and Intellectual Standard. Our holistic educational'
      + 'system model opens an opportunity to change lives, acquire good outcomes and '
      + 'maximize resources, thus breaking the cycle...'
  }
];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: React.SetStateAction<number>) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-white" captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div>
      
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 250px;
              background: rgb(66, 39, 116);
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      
      <br/>
      <CardDeck>
      
          <Card>
            <CardBody>
              <CardTitle><h5>Career Development </h5></CardTitle>
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
    <br/>
    </div>
  );
}

export default Slideshow;