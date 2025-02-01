import { useContext } from "react"
import { SearchFoodContext } from "./ContextProvider"
import { SearchDishContext } from "./ContextProvider"

function Recipe() {
    const { dishname } = useContext(SearchDishContext)
    const { searchfood } = useContext(SearchFoodContext)
    const getEmbedUrl = (url) => {
        if (!url) return ""; // Handle the URL is not  undefined
        const videoId = new URL(url).searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
      };
    console.log(dishname)
    console.log(dishname)
    return (
        <>
            <div className='meals__container'>
                {
                    searchfood && searchfood.length > 0 ? (
                        searchfood.map(function (data) {
                            const ingredients = []
                            for (let i = 0; i < 20; i++) {
                                const ingredient = data[`strIngredient${i}`]

                                if (ingredient) {
                                    ingredients.push(ingredient);
                                }
                            }
                            const measurements=[]
                            for(let i=1; i<10; i++)
                            {
                                const measurment = data[`strMeasure${i}`]
                                if(measurment)
                                {
                                    measurements.push(measurment)
                                }
                            }
                            return (
                                <>

                                    <div className="recipe__page">
                                        <h1 className="recipe__page__heading">{data.strMeal}</h1>
                                        <h3>⭐⭐⭐⭐ 4 Reviews</h3>
                                        <i className="recipe__page__content">
                                            {ingredients.join(", ")}
                                            deliciously chunky spread in this {data.strMeal}. Dollop on bowls, spread on wraps, anything you want!
                                        </i>
                                        <img src={data.strMealThumb} className='recipe__page__img' alt='' />
                                        <h1>Ingredients</h1>   
                                        <div className="recipe__page__ingredientContainer"> 
                                                                          
                                       <h1 style={{marginTop:"-1%",textAlign:"center",color:"white",width:"100%",backgroundColor:" #734060"}}>{data.strMeal}
                                        <br></br>                
                                       <p style={{fontSize:"15px",paddingBottom:"10px"}}> ⭐⭐⭐⭐</p>
                                       </h1>   
                                               <div className="recipe__page__ingredientContainer1">  
                                                <div>                  
                                            {
                                                ingredients.map(function(ingredient)
                                            {
                                                return <div> <li style={{listStyleType:"square"}}>{ingredient}</li></div>
                                            })
                                            }
                                            </div>
                                            
                                            <img src={data.strMealThumb} style={{width:"40%",height:"200px",borderRadius:"360px"}} alt=""/>
                                            </div>
                                        </div>
                                       
                                       <iframe style={{marginLeft:"15%",marginTop:"3%"}}
                                       title="url"
                                       src={getEmbedUrl(data.strYoutube)} width='70%' height='20%'>
                                       </iframe>
                                        <h1><b>Description : </b></h1>
                                       <p style={{fontSize:"20px",color:"#734060",lineHeight:"1.6",fontWeight:600}}> {data.strInstructions}</p>
                                        <b>Video : </b>  <a href={data.strYoutube}> {data.strYoutube}</a>
                                    </div>


                                </>
                            )
                        })) : (<h1>No Meals Found ...</h1>)
                }
            </div>
        </>
    )
}
export default Recipe