import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Working from "./Components/Working";
import Projects from "./Components/Projects";
import Clients from "./Components/Clients";
import Contacts from "./Components/Contacts";
import NewsLetter from "./Components/NewsLetter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={[
              <Home />,
              <About />,
              <Services />,
              <Working />,
              <Projects />,
              <Clients />,
              <NewsLetter />,
              <Contacts />,
            ]}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
