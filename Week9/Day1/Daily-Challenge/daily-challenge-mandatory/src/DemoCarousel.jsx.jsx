import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    const { imagesUrl } = this.props;

    return (
      <Carousel>
        {imagesUrl.map((img, index) => (
          <div key={index}>
            <img src={img.url} alt={img.name} />
            <p className="legend">{img.name}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default DemoCarousel;
