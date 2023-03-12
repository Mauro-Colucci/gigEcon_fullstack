import Slider from "infinite-react-carousel";
import "./Slide.scss";

const Slide = ({ slidesToShow, arrowsScroll, children }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};
export default Slide;
