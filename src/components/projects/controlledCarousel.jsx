import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.css';

function ControlledCarousel({images}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const imageArray = Object.entries(images);

    const styles = {
        imgcaption: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5',
                }
    }
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imageArray.map(([caption, image], idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={require(`./${image}`)}
              alt={`image of ${image}`}
            />
            <div className='imgcaption'>
                <Carousel.Caption>
                <h3 style={styles.imgcaption}>{`${caption}`}</h3>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  
  export default ControlledCarousel;