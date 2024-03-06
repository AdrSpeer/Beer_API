import Starter from "../../components/Starter/Starter";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <Starter
        img="../../../public/img/first.jpg"
        headline="All Beers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. "
        link="/allbeers"
      />
      <Starter
        img="../../../public/img/second.png"
        headline="Random Beer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. "
        link="/random"
      />
    </section>
  );
};

export default Home;
