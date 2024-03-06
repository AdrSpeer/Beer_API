import { useEffect, useState } from "react";
import "./Random.css";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Random = () => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.log("Error beim Laden der API", err));
  }, []);
  console.log(allData);
  return (
    <>
      <Nav />
      <section className="random">
        {allData ? (
          <article>
            <img src={allData.image_url} alt={allData.name} />
            <div className="random-text">
              <h1>{allData.name}</h1>
              <h3>{allData.tagline}</h3>
              <div>
                <p>First brewed:</p>
                <p>{allData.first_brewed}</p>
                <p>Attenuation level:</p>
                <p>{allData.attenuation_level}</p>
              </div>
              <h6>{allData.description}</h6>
              <Link to="/allbeers">
                <img src="../../../public/img/Back.png" alt="Back Icon" />
              </Link>
            </div>
          </article>
        ) : (
          <p>Laden...</p>
        )}
      </section>{" "}
    </>
  );
};

export default Random;
