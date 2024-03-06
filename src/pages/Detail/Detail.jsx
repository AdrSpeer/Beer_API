import { useEffect, useState } from "react";
import "./Detail.css";
import { Link, useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
// Detail Page für die einzelnen Produkte
const Detail = () => {
  // UseState für alle Daten(detailData) und die gefilterten(filterData)
  const [detailData, setDetailData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  // Fetch für alle Daten
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setDetailData(data))
      .catch((err) => console.log("Fehler beim Laden", err));
  }, []);
  // ID aus der Adresse auslesen
  const { id } = useParams();
  // Find Funktion um die ID zuzuweisen und abzustimmen
  useEffect(() => {
    const finder = detailData.find((item) => item._id === id);
    setFilterData(finder);
  }, [detailData]);

  return (
    <>
      <Nav />
      <section className="detail">
        {filterData ? (
          <>
            {/* DOM befüllen mit ternary für den Ladevorgang */}
            <img src={filterData?.image_url} alt={filterData?.name} />
            <div className="detail-text">
              <h1>{filterData?.name}</h1>
              <h3>{filterData?.tagline}</h3>
              <div>
                <p>First brewed:</p>
                <p>{filterData?.first_brewed}</p>
                <p>Attenuation level:</p>
                <p>{filterData?.attenuation_level}</p>
              </div>
              <h6>{filterData?.description}</h6>
              <Link to="/allbeers">
                <img src="../../../public/img/Back.png" alt="Back Icon" />
              </Link>
            </div>
          </>
        ) : (
          <p>Laden...</p>
        )}
      </section>
    </>
  );
};

export default Detail;
