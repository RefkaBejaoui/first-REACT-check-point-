import Carousel from 'react-bootstrap/Carousel';
import Cat1 from './catEys.jpg'
import Cat2 from './cats.jpg'
import Cat3 from './Cat.jpg'


const Caroselle = () => {

  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Cat1}
        alt="cat 1"
        height={400}
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Cat2}
        alt="cat 2"
        height={400}
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Cat3}
        alt="cat 3"
        height={400}
      />
    </Carousel.Item>
  </Carousel>
  );
}

export default Caroselle