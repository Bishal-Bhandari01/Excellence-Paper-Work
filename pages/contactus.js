import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contactus() {
  return (
    <div id="contactus" className="container mt-5 mv-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center">
            <strong>
              <u>Contact us</u>
            </strong>
          </h2>
        </div>
      </div>
      <div className="row mt-3 mb-5 d-flex align-items-center">
        <div className="col-sm-6">
          <h3 className="mb-3">Thank you for Visiting.</h3>
          <h6 className="mb-3">
            <FontAwesomeIcon icon={faBuilding} style={{ marginRight: "5px" }} />
            Excellence Paper Works
          </h6>
          <h6 className="mb-3">
            <a
              href="https://goo.gl/maps/QDyqHjFicYYPjXLAA"
              target="_blank"
              className="text-decoration-none text-dark"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "5px" }}
              />
              Karkando Chowk, Nepalgunj
            </a>
          </h6>
          <h6>
            <a
              href="tel: +9779864958063"
              className="text-decoration-none text-dark"
            >
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
              9864958063
            </a>
          </h6>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your fullname"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Subject
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mt-3 mb-3 text-center">
                  <button
                    className="btn btn-primary"
                    style={{ width: "10rem" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
