import React from "react";

function About() {
  return (
    <div className="container mt-5 text-light" id="about">
      <h1 className="text-center fw-semibold text-decoration-underline">
        IDA - AR, VR and MR Company in India
      </h1>
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-12 order-2 ordermd-1 col-md-6 ">
          <p className="fs-3">
            We IDA - Industrial Design and Animation is a creative and
            Innovative Digital Retransformation organisation with Focus the
            stream on both Web 3.0 and Industry 4.0 solutions. We Transform and
            elevate your Insustry and Business With Immersive Technical solution
            with extensiveand wide range of Imagination that becomes Possible.
          </p>
        </div>
        <div className="col-12 order-1 order-md-2 col-md-6 position-relative">
          <img className="w-100 vr0" src="Images/vrg.png" alt="" />
        </div>
        <div className="col-12 order-3 col-md-6 position-relative">
          <img className="w-100 vr0" src="Images/vrhand.png" alt="" />
        </div>
        <div className="col-12 order-4 col-md-6">
          <p className="fs-3">
            We @IDA Transform your needs and reinvent the Your business for
            upcoming digital future. We create and design based on your needs
            with technologies like AR ( Augmented Reality ), VR( Virtual Reality
            ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the
            entire future.
          </p>
          <p className="fs-3 fw-bold">Join Us into the Immersive Future</p>
          <span className="rounded-2 bg-dark text-light px-3 py-1">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
