import Image from "next/image";
import AboutImage from "../public/james-harrison-vpOeXr5wmR4-unsplash.jpg";

export default function Aboutus() {
  return (
    <div id="aboutus" className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center mb-4 d-flex justify-content-center">
            <u>
              <strong>About us</strong>
            </u>
          </h2>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="card" style={{ width: "18rem" }}>
          <Image
            src={AboutImage}
            alt="about_pic"
            style={{ width: "100%" }}
            layout="responsive"
            objectFit="cover"
          />
          <div className="card-body">
            <div className="card-title text-center">Bishal Bhandari</div>
            <p className="text-muted text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <Image
            src={AboutImage}
            alt="about_pic"
            style={{ width: "100%" }}
            layout="responsive"
            objectFit="cover"
          />
          <div className="card-body">
            <div className="card-title text-center">Bishal Bhandari</div>
            <p className="text-muted text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <Image
            src={AboutImage}
            alt="about_pic"
            style={{ width: "100%" }}
            layout="responsive"
            objectFit="cover"
          />
          <div className="card-body">
            <div className="card-title text-center">Bishal Bhandari</div>
            <p className="text-muted text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
