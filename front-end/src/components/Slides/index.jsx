import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function DarkVariantExample() {
  return (
    <Container className='mt-2'>
<Carousel>
      <Carousel.Item>
        <Link>
        <img
          className="d-block w-100"
          style={{ height: '300px' }}
          src="https://tse1.mm.bing.net/th?id=OIP.-TwlhLYUku4VQoG2od1yvQHaEK&pid=Api&P=0&h=220"
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link>
        <img
          className="d-block w-100"
          style={{ height: '300px' }}
          src="https://tse3.mm.bing.net/th?id=OIP.GU7rALcQVFnrd9dY76jgpAHaEc&pid=Api&P=0&h=220"
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link>
        <img
          className="d-block w-100"
          style={{ height: '300px' }}
          src="https://tse2.mm.bing.net/th?id=OIP.gipMdJfW5LG9uOd6FRa74QHaEo&pid=Api&P=0&h=220"
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
    </Carousel>
    </Container>
    
  );
}

export default DarkVariantExample;