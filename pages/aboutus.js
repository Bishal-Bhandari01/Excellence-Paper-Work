import Image from "next/Image";
import AboutImage from "../public/james-harrison-vpOeXr5wmR4-unsplash.jpg";

export default function Aboutus() {
  return (
    <div id='aboutus' className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center mb-4 d-flex justify-content-center">
            <u>
              <strong>About us</strong>
            </u>
          </h2>
        </div>
      </div>
      <div className="row overflow-hidden">
        <div className="col-sm-6">
          <div className="text-center">
            <Image
              src={AboutImage}
              alt="about_pic"
              style={{ borderRadius: "30px" }}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-sm-6">
        <div className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
  );
}
