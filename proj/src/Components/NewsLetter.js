import React from "react";
import axios from "axios";
import { useState } from "react";

function NewsLetter() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8000/sub/subscribe", {
          Name,
          Email,
          Phone,
        })
        .then((res) => {
          console.log(res.data.msg);
          if (res.data.msg === "added") {
            alert("Thank You for the Subscribation");
          } else if (res.data.msg === "exist") {
            alert(Email + " : Already Exist");
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container my-5 text-light" id="subscribe">
      <h2 className="text-center text-decoration-underline">Subscribe</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="d-flex flex-column my-4 justify-content-evenly align-items-center">
          <div className="d-flex w-100 m-4">
            <div className="w-50 pe-4">
              <input
                type="text"
                className="w-100 fs-5 border-0 p-3 rounded-pill"
                placeholder="Name"
                name=""
                id=""
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-50 ps-4">
              <input
                type="number"
                className="w-100 fs-5 border-0 p-3 rounded-pill"
                placeholder="Phone"
                name=""
                id=""
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="w-100 m-4">
            <input
              type="email"
              className="w-100 fs-5 border-0 p-3 rounded-pill"
              placeholder="Email..."
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" m-4">
            <button class="button-85 p-3 fs-5 w-100" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewsLetter;
