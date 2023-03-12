import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards } from "../../dummyData";
import CatCard from "../../components/catCard/CatCard";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
    </main>
  );
};
export default Home;
