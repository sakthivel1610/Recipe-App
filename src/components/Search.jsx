import { useContext } from 'react'
import search from '../assets/icons/search.png'
import { SearchDishContext } from './ContextProvider'
import { Link } from 'react-router-dom'
function Search()
{
    const{dishname,setDishname}=useContext(SearchDishContext)
    function handleChange(e)
    {
        setDishname(e.target.value)
        console.log(dishname)
        
    }
    
    return(
        <>
        <div className='navbar-search'>
            <input type='text' placeholder='enter the Receipe' value={dishname}
            onChange={handleChange}
            className='navbar__search__input'></input>
         <Link to={"/dishes"} >  <img src={search} alt='search' style={{width:"30px"}}/></Link>
        </div>
        </>
    )
}
export default Search