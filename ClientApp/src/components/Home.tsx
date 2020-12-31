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

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
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
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
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
              background: black;
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
      <br/>
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
    </div>
  );
}

export default Slideshow;