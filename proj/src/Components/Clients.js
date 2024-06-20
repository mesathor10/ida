import React from "react";
import data from "../Data2.json";

function Clients() {
  return (
    <div
      id="client"
      className="container-fluid p-0 m-0 d-flex flex-column justify-content-center align-items-center text-center text-light"
    >
      <div className="bg-dark py-4 my-4 d-flex flex-column align-items-center">
        <h2 className="text-decoration-underline">Our Clients</h2>
        <p className="w-75 fs-5">
          Our clients aren't just clients; they are valued partners in progress.
          We take pride in understanding their unique needs, tailoring
          solutions, and fostering long-term relationships.
        </p>
      </div>
      <swiper-container
        class="mySwiper "
        loop="true"
        space-between="40"
        speed="3000"
        style={{ width: "100%" }}
        slides-per-view="6"
        autoplay-delay="1"
        autoplay-disable-on-interaction="false"
        free-mode="true"
        free-mode-momentum="false"
      >
        {data.map((a) => (
          <swiper-slide
            key={a.id}
            style={{
              backgroundImage: `url(${a.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100px",
              height: "170px",
              borderRadius: "50%",
              boxShadow: "inset 0px 0px 10px black",
            }}
          ></swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default Clients;
