import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <HashLink class="navbar-brand" to="/#">
            <img src="Images/IDA.png" width={"60px"} height={"50px"} alt="" />
          </HashLink>
          <div>
            <button
              class="navbar-toggler border-light border-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <i class="bi bi-list text-light fs-3"></i>
            </button>
            <div
              class="offcanvas offcanvas-end bg-transparent"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header bg-light text-light">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  <HashLink class="navbar-brand" to="/#">
                    <img
                      src="Images/IDA.png"
                      width={"60px"}
                      height={"50px"}
                      alt=""
                    />
                  </HashLink>
                </h5>
                <button
                  type="button"
                  class="btn-close text-light"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav text-dark">
                  <li class="nav-item ">
                    <HashLink
                      class="nav-link text-light"
                      aria-current="page"
                      to="/#home"
                    >
                      Home
                    </HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink
                      class="nav-link text-light"
                      aria-current="page"
                      to="/#about"
                    >
                      About
                    </HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink
                      class="nav-link text-light"
                      aria-current="page"
                      to="/#service"
                    >
                      Services
                    </HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink
                      class="nav-link text-light"
                      aria-current="page"
                      to="/#client"
                    >
                      Clients
                    </HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink
                      class="nav-link text-light"
                      aria-current="page"
                      to="/#career"
                    >
                      Career
                    </HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink
                      class="nav-link text-light"
                      aria-current="page"
                      to="/#contact"
                    >
                      Contact Us
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// <nav class="navbar navbar-expand-lg sticky-top top-0 w-100 z-2">
//       <div class="container-fluid ">
//         <div className="d-flex w-100 justify-content-between align-items-center">
//           <HashLink class="navbar-brand" href="#">
//             <img src="Images/IDA.png" width={"60px"} height={"50px"} alt="" />
//           </Link>
//           <div className="text-light">
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNav">
//               <ul class="navbar-nav text-light">
//                 <li class="nav-item">
//                   <HashLink
//                     class="nav-link text-light"
//                     aria-current="page"
//                     href="#"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <HashLink
//                     class="nav-link text-light"
//                     aria-current="page"
//                     href="#"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <HashLink
//                     class="nav-link text-light"
//                     aria-current="page"
//                     href="#"
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <HashLink
//                     class="nav-link text-light"
//                     aria-current="page"
//                     href="#"
//                   >
//                     Clients
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <HashLink
//                     class="nav-link text-light"
//                     aria-current="page"
//                     href="#"
//                   >
//                     Career
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <HashLink
//                     class="nav-link text-light"
//                     aria-current="page"
//                     href="#"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
