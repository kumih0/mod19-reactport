//TO DO: using as empty template for use as background img slides for about sect
//also as swiper for projects?

import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Image from 'react-bootstrap/Image'


function ImgCarousel() {
  return (
    <Carousel controls={false} indicators={false} >
      <CarouselItem>
        <Image src="" fluid />
      </CarouselItem>
    </Carousel>
  );
}

export default ImgCarousel;