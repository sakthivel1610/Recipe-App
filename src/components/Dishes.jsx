// This page is used to a search dish names


import { useContext } from 'react'
import FoodImage from '../assets/New folder/foodSearch.jpg'
import { SearchDishContext } from './ContextProvider'
import { SearchFoodContext } from './ContextProvider'

function Dishes()
{
    const{dishname}=useContext(SearchDishContext)
    const{searchfood}=useContext(SearchFoodContext)
 
 
    return(
        <>
        <img src={FoodImage} className='country__cover__img' alt=''/>
        <h1 style={{justifySelf:"center"}}>{dishname} Foods</h1>
        <div className='meals__container'>
            {
                searchfood &&searchfood.length>0?(
                searchfood.map(function(data)
            {
                const ingredients=[]
                for(let i=0;i<20;i++)
                {
                    const ingredient=data[`strIngredient${i}`]
                    
                if (ingredient) {
                    ingredients.push(ingredient);
                  }
                }
               return (
                <>
                
                <div className='food__receipe__container'>
                <div className='food__container'>
                    <img src={data.strMealThumb} className='food__img' alt=''/>
                    </div>
                    <div className='desc__container'>
                    <h2>{data.strMeal}</h2>
                    <h3>Ingredients</h3>
                    <p>
                        {ingredients.join(", ")}
                    </p>
                    <p><b>Description : </b>{data.strInstructions}</p>
                    <b>Video : </b>  <a href={data.strYoutube}> {data.strYoutube}</a>
                    </div>
                    
                    </div>
                
                
                </>
               )
            })):(<h1>No Meals Found ...</h1>)
            }
        </div>
        </>
    )
}
export default Dishes