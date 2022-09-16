import Images from "next/image";
import ImageOne from "../public/james-harrison-vpOeXr5wmR4-unsplash.jpg";

export default function Main(props) {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner mt-1">
          <div className="carousel-item active">
            <Images
              src={ImageOne}
              className="d-block"
              layout="responsive"
              objectFit="cover"
              alt="Picture One"
              style={{borderRadius: "14px", height: "90vh" }}
            />
          </div>
          <div className="carousel-item">
            <Images
              src={ImageOne}
              className="d-block"
              layout="responsive"
              objectFit="cover"
              alt="Picture One"
              style={{borderRadius: "14px", height: "90vh" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
