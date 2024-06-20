import React from "react";
import data from "../Data.json";

function Services() {
  return (
    <div id="service" className="container serv text-light my-5">
      <h1 className="text-center fs-semibold">Our Services</h1>
      <p className="text-center fs-4">
        Reinvent your industry with our industrial solutions
      </p>
      <swiper-container
        class="mySwiper"
        loop="true"
        space-between="10"
        autoplay-disable-on-interaction="false"
        autoplay="true"
        speed="2000"
        effect="coverflow"
        grab-cursor="true"
        centered-slides="true"
        slides-per-view="auto"
        coverflow-effect-rotate="50"
        coverflow-effect-stretch="0"
        coverflow-effect-depth="100"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="true"
      >
        {data.map((a) => (
          <swiper-slide key={a.id} style={{ backgroundImage: `url(${a.img})` }}>
            <p>{a.cln}</p>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default Services;
