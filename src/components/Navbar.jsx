import React, { useState, useContext } from "react";
import { CountryNameContext } from "./ContextProvider";
import { Link } from "react-router-dom";
import Downarrow from "../assets/icons/down.png";
import Menu from "../assets/icons/menu.png";
import Search from "./Search";

function Navbar() {
  const countrys = ["Indian", "Italian", "Chinese", "Mexican", "French"];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { selectedCategory, setSelectedCategory } =useContext(CountryNameContext); //Country Name in Navigation Bar


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  function handleSideNavbar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <>
      <div className="navbar-container">
        <h1 className="navbar__heading">Recipe App</h1>
        <Search />
        <div className="navbar-items">
          <p>
          <Link to="/"> Home</Link>
          </p>
          <p><Link to="/recipe"> Recipes</Link></p>

          <div
            className="navbar__link__categories"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          >
            <p>
              Categories{" "}
              <img src={Downarrow} alt="" style={{ width: "15px", marginTop: "1px" }} />
            </p>
            <div className={`categories__dropdown ${isDropdownVisible ? "show" : ""}`}>
              {countrys.map((item) => (
                <Link to="/country" key={item}>
                  <p
                    onClick={() => handleCategoryClick(item)}
                    className={selectedCategory === item ? "selected" : ""}
                  >
                    {item}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <p><Link to="/about"> About</Link></p>
          <p><Link to="/contact"> Contact Us</Link></p>
        </div>

        <img
          src={Menu}
          alt=""
          style={{ width: "30px" }}
          className="menu__icon"
          onClick={handleSideNavbar}
        />
      </div>

      {/* Side Navbar */}
      <div className={`side__navbar__items ${isSidebarVisible ? "show" : ""}`}>
        <p>
          <Link to="/"> Home</Link>
        </p>
        <p><Link to="/recipe"> Recipes</Link></p>
        <div
          className="navbar__link__categories"
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          <p>
            Categories{" "}
            <img src={Downarrow} alt="" style={{ width: "15px", marginTop: "1px" }} />
          </p>
          <div className={`categories__dropdown ${isDropdownVisible ? "show" : ""}`} style={{marginLeft:"40%",marginTop:"-40%"}}>
            {countrys.map((item) => (
              <Link to="/country" key={item}>
                <p
                  onClick={() => handleCategoryClick(item)}
                  className={selectedCategory === item ? "selected" : ""}
                >
                  {item}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <p><Link to="/about"> About</Link></p>
        <p><Link to="/contact"> Contact Us</Link></p>
      </div>
    </>
  );
}

export default Navbar;
