import React from "react";

function Projects() {
  return (
    <div id="project" className="container text-light text-center proj my-5">
      <h1 className="text-center fs-semibold">Our Projects</h1>
      <p className="text-center fs-4">
        Have a sneak peak at the Arts we Crafted
      </p>
      <swiper-container
        class="mySwiper text-dark"
        effect="cards"
        grab-cursor="true"
        space-between="10"
      >
        <swiper-slide className="p1">
          <img
            src="Images/strike.jpg"
            className="w-100 "
            height={"320px"}
            alt=""
          />
          <div className="w-100 mb-4">
            <h2 className="text-center">Precision Strike</h2>
            <p className="text-center">Mobile Shooting Game</p>
            <div className="btn btn-dark rounded-3 text-light">Learn more</div>
          </div>
        </swiper-slide>
        <swiper-slide className="p1">
          <img src="Images/car.jpg" className="w-100" height={"320px"} alt="" />
          <div className="w-100 mb-4">
            <h2 className="text-center">Turbo Thrust</h2>
            <p className="text-center">
              Mobile legends AAA title racing mobile game
            </p>
            <div className="btn btn-dark rounded-3 text-light">Learn more</div>
          </div>
        </swiper-slide>
        <swiper-slide className="p1">
          <img
            src="Images/fest.jpeg"
            className="w-100"
            height={"320px"}
            alt=""
          />
          <div className="w-100 mb-4">
            <h2 className="text-center">Startup Fest Expo</h2>
            <p className="text-center">Oneyes startup fest expo</p>
            <div className="btn btn-dark rounded-3 text-light">Learn more</div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default Projects;
