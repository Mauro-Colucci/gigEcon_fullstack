import { Link } from "react-router-dom";
import "./CatCard.scss";

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt={item.title} />
        <span className="desc">{item.desc}</span>
        <h3 className="title">{item.title}</h3>
      </div>
    </Link>
  );
};
export default CatCard;
