import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="bg-dark" id="contact">
      <div className="container py-4 text-light">
        <div className="row justify-content-center align-items-center">
          <div className="col-6 col-md-4">
            <div className="fs-4 fw-semibold">Contact Us</div>
            <p className="my-4">
              INDUSTRIAL DESIGN & ANIMATIONS <br /> Karunaa Conclave, No.1963, J
              Block, 3rd Street, 5th Main Road, Anna Nagar West, Anna Nagar,
              Chennai, Tamil Nadu - 600040, INDIA
            </p>
            <div>Email: info@idacreations.com</div>
          </div>

          <div className="col-6 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div className="fs-4 fw-semibold text-center">Location</div>
            <iframe
              className="w-100 border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7772.518223648933!2d80.20856!3d13.082758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641f73827315%3A0xc60a47141c034265!2sSyncfusion%20Software%20Pvt%20Ltd%2C%20Karuna%20Conclave%20Block!5e0!3m2!1sen!2sin!4v1718807731400!5m2!1sen!2sin"
              title="map"
              allowfullscreen=""
              loading="lazy"
              height={"250px"}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-8 col-md-4 d-flex justify-content-around align-items-center ">
            <ul className="fs-5 p-0">
              <HashLink to="/#home">
                <li className="my-2">Home</li>
              </HashLink>
              <HashLink to="/#about">
                <li className="my-2">About</li>
              </HashLink>
              <HashLink to="/#service">
                <li className="my-2">Services</li>
              </HashLink>
              <HashLink to="/#client">
                <li className="my-2">Client</li>
              </HashLink>
              <HashLink to="/#career">
                <li className="my-2">Career</li>
              </HashLink>
            </ul>
            <ul className="fs-5 p-0">
              <Link>
                <li className="my-2">
                  <i class="bi bi-instagram text-light fs-5 m-2"></i> Instagram
                </li>
              </Link>
              <Link>
                <li className="my-2">
                  <i class="bi bi-twitter-x text-light fs-5 m-2"></i> Twitter
                </li>
              </Link>
              <Link>
                <li className="my-2">
                  <i class="bi bi-facebook text-light fs-5 m-2"></i> FaceBook
                </li>
              </Link>
              <Link>
                <li className="my-2">
                  <i class="bi bi-whatsapp text-light fs-5 m-2"></i> WhatsApp
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
