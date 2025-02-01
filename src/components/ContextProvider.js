import { createContext, useState,useEffect} from "react";
import axios from "axios";

// Context for storing the selected country/category
const CountryNameContext = createContext();

// Context for storing the searched dish name
const SearchDishContext = createContext();

// const fetch search food array storage data
const SearchFoodContext=createContext()

const FoodNameContext=createContext();
function ContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(""); // Stores selected country/category
  const [dishname, setDishname] = useState(""); // Stores searched dish name
  const [foodname,setFoodname]=useState("omlete") //Stores fetched api food name
  const[searchfood,setSearchfood]=useState([])
   useEffect(function(){
      const fetchFood = async () => {
          try {
              var searchDishes=await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishname}`)
            setSearchfood(searchDishes.data.meals);
            console.log(searchDishes.data.meals)
          } catch (error) {
            console.error("Error fetching meals:", error);
          }
        };
        fetchFood()
      },[dishname])


  return (
    <CountryNameContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      <SearchDishContext.Provider value={{ dishname, setDishname }}>
        <FoodNameContext.Provider value={{foodname,setFoodname}}>
          <SearchFoodContext.Provider value={{searchfood,setSearchfood}}>
        
        {children}
        </SearchFoodContext.Provider>
        </FoodNameContext.Provider>
      </SearchDishContext.Provider>
    </CountryNameContext.Provider>
  );
}

export default ContextProvider
export {CountryNameContext, SearchDishContext,FoodNameContext,SearchFoodContext};
