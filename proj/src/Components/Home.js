import React from "react";

function Home() {
  return (
    <div id="home" className="container-fluid home" style={{ height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12 col-md-5 offset-md-6">
          <p className="display-4 text-end text-light">
            Bringing
            <span className="px-2 idea">Ideas</span> To Our
            <span className="px-2 real">Reality</span>
          </p>
          <span className="px-3 mt-3 py-1 fs-4 float-end rounded-2 bg-dark text-light">
            Explore
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
