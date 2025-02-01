
import image from '../assets/New folder/foodSearch.jpg'
function Latest()
{
    return(
        <>
        <h2 style={{color:"#7b4b69",margin:"2%"}}>The Latest and Greatest</h2>
        <div style={{padding:"3%",backgroundColor:"lightgrey"}}>
            <h1>Our websites are used for cooking a variety of dishes.</h1>
        <div className="image__home__container" >
            <img src={image} className='image__home' alt=''/>
            <div>
                <p style={{paddingLeft:"10%",lineHeight:"1.6",fontWeight:600,fontSize:"20px"}}>Welcome to Receipe App, your go-to destination for exploring a variety
                     of delicious and easy-to-follow recipes. Whether you're a beginner in 
                     the kitchen or an experienced chef, we have something for everyone.
                      From quick meals to gourmet feasts, we offer step-by-step guides,
                     ingredient tips, and a wealth of cooking techniques.</p>
            </div>
        </div>
        </div>
        </>
    )
}
export default Latest