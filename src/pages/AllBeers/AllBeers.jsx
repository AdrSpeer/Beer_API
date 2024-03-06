import { useEffect, useState } from "react";
import "./AllBeers.css";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.log("Fehler beim Laden der Beer API", err));
  }, []);

  return (
    <>
      <Nav />
      <section className="allbeers">
        {allData ? (
          allData?.map((item, index) => (
            <article key={index}>
              <img src={item.image_url} alt={item.name} />
              <div className="allbeers-text">
                <h2>{item.name}</h2>
                <h3>{item.tagline}</h3>
                <h4>created by: {item.name}</h4>
                <Link to={`/detail/${item._id}`}>Details</Link>
              </div>
            </article>
          ))
        ) : (
          <p>Laden...</p>
        )}
      </section>
    </>
  );
};

export default AllBeers;
