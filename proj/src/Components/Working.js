import React from "react";

function Working() {
  return (
    <div id="work" className="container-fluid work text-light py-5">
      <h1 className="text-center fs-semibold">Our Working Process</h1>
      <p className="text-center fs-4">
        A well-structured workflow with great design execution
      </p>
      <div className="container">
        <div className="text-center row my-5 justify-content-center align-items-center text-dark">
          <div className="col-12 col-md-3 cr rounded-4 bg-light p-3 h-100">
            <img
              className="w-100"
              src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?t=st=1718771294~exp=1718774894~hmac=66f53aa063fc642407c1df88069468e1a2bb06d3c459ec68ca8f8682c97707da&w=900"
              alt=""
            />
            <div className="fs-4 fw-semibold">Discussion</div>
            <p>
              Under the client's business,goals and challenges for building
              relationship.
            </p>
          </div>

          <div className="col-3 col-md-1  upa">
            <img
              className="ar1 w-100"
              style={{ filter: "invert(1)" }}
              src="Images/rta.png"
              alt=""
            />
          </div>

          <div className="col-12 col-md-3 cr rounded-4 bg-light p-3 h-100">
            <img
              className="w-100"
              src="https://img.freepik.com/free-vector/business-idea-concept-with-people_52683-28609.jpg?t=st=1718771441~exp=1718775041~hmac=04264912212d2ff00661f3508cd2b6dc6bc8520814d553c599b9c0e58201224c&w=826"
              alt=""
            />
            <div className="fs-4 fw-semibold">Ideate</div>
            <p>
              Gather ideas and create the first concept for the future product.
            </p>
          </div>

          <div className="col-3 col-md-1 doa">
            <img
              className="ar2 w-100 float-start"
              style={{ filter: "invert(1)" }}
              src="Images/rta.png"
              alt=""
            />
          </div>

          <div className="col-12 col-md-3 cr rounded-4 bg-light p-3">
            <img
              className="w-100"
              src="https://img.freepik.com/free-vector/employee-engagement-concept-illustration_114360-20413.jpg?t=st=1718771573~exp=1718775173~hmac=e1351800c234fa3e066d794fdd170ba9d0446e5120588d0ccfe02c4a526ffc44&w=826"
              alt=""
            />
            <div className="fs-4 fw-semibold">Execution</div>
            <p>
              Provide the first draft of a project,accept minor and major
              revisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
