import { useContext, useState, useEffect } from "react";
import { CountryNameContext } from "./ContextProvider";
import Food from '../assets/New folder/foodcover.jpg'

import { SearchDishContext } from "./ContextProvider";
import axios from 'axios';
import { Link } from "react-router-dom";

function Countryspl() {
  const { selectedCategory } = useContext(CountryNameContext);  
  const [meals, setMeals] = useState([]); // Fetch meals when selectedCategory changes
const{dishname,setDishname}=useContext(SearchDishContext) //Stores fetched api food name
    useEffect(() => {
      if (selectedCategory) {
        const fetchMeals = async () => {
          try {
            const response = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCategory}`);
            setMeals(response.data.meals);
          } catch (error) {
            console.error("Error fetching meals:", error);
          }
        };

      fetchMeals();
    }
  }, [selectedCategory]); 

  function handleFoodName(mealname)
  {
    setDishname(mealname)
    console.log(dishname)
  }
  return (
    <div>
    
      <img src={Food} alt="" className="country__cover__img"/>
      <h1 style={{textAlign:"center"}}>{selectedCategory} Receipes</h1>
      <p style={{textAlign:"center",fontSize:"1.3vw"}}>The best {selectedCategory}-style pasta, chicken dishes, soup, and more. Traditiona
        l recipes with photos and videos to make them just like in the old country.</p>
      <div className="meals__container">

      
        {meals && meals.length > 0 ? (
          meals.map((meal, index) => (
          
        <>
        <div className="countrymeals__img__container">
           <img src={meal.strMealThumb} alt={meal.strMeal}  className="countrymeals__img"/>
           <div>
            <Link to="/recipe">
           <button 
            onClick={() => handleFoodName(meal.strMeal)} value={dishname}  
            className="countryspl__foodName">{meal.strMeal}</button>
            </Link>
           <p>⭐⭐⭐⭐</p>
           </div>
           </div>
           </>   
          ))
        ) : (
          <p>No meals found for this category.</p>
        )}
    </div>
    </div>
  );
}

export default Countryspl;
