import { useEffect, useState } from "react";
import "./Detail.css";
import { Link, useParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Detail = () => {
  const [detailData, setDetailData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setDetailData(data))
      .catch((err) => console.log("Fehler beim Laden", err));
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const finder = detailData.find((item) => item._id === id);
    setFilterData(finder);
  }, [detailData]);

  return (
    <>
      <Nav />
      <section className="detail">
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
      </section>
    </>
  );
};

export default Detail;
