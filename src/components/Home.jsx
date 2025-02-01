import Tourtila from '../assets/New folder/Tortilla-soup.webp'
import Spicy from '../assets/New folder/Spicy__soup.jpg'
import FriedEgg from '../assets/New folder/Fried__egg.webp'
import Meatballs from '../assets/New folder/Ricto__meatballs.jpg'
import Latest from './Latest'
function Home() {
    var img = [

        {
            img: Tourtila,
            name: "Tortila__Soup"
        },
        {
            img: Spicy,
            name: "Spicy-Soup"
        },
        {
            img: FriedEgg,
            name: "Fried Egg"
        },
        {
            img: Meatballs,
            name: "Meatballs"
        }
    ]

    return (
        <>
            <div>
                <div style={{ display: "flex", alignItems: "center", gap: "2%", justifyContent: "center", marginTop: "2%" }}>
                    <h3>Simple Receipes Made For</h3> <em style={{ fontFamily: "Brush Script MT", fontSize: "40px", color: "#663051" }}>real, Acutal, everyday life</em>
                </div>
                <div className='home__img__container'>

                    {
                        img.map(function (data) {

                            return <div style={{ position: "relative" }}> <img src={data.img} className="home__img" alt='img' />
                                <button className='home__dish__button'>{data.name}</button>
                            </div>
                        })
                    }
                </div>
                <div>
                    <h2 style={{color:"orange",justifySelf:"center"}}>AS SEEN IN</h2>
                    <div className='home__brands'>
                    <p >Buzz Feed</p>
                    <p style={{fontFamily:"curlz MT" }}>Pure WOW</p>
                    <p>Brit+CO</p>
                    <p style={{fontSize:"1.4vw" }}>POP-SUGAR</p>
                    <p style={{fontSize:"12px" }}>The EVERY GIRL</p>
                    <p>Kitchn</p>
                    </div>
                </div>
            </div>
            <Latest/> </>
    )
}
export default Home