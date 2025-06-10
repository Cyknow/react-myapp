import { DataApi } from "../../Data/Data";
import "./serv.css";

const Serv = () => {
  return (
    <div>
      <section>
     <div className="images-display">
    <div className="our-services">
      <p>Our Blogs</p>
      <div className="div-divider"></div>
    </div>

{/* img div starts here */}
    <div className="images-section">
      {DataApi.map((prince:any)=>(
        <>
      <div>
        <img src= {prince.image} alt="image of a man sitting down"/>
        <p className="heading-title">{prince.title}</p>
        <p className="heading-description">
          {prince.desc}
        </p>
      </div>
      {/* <div>
        <img src= {prince.image} alt="image of nature"/>
        <p className="heading-title">{prince.title}</p>
        <p className="heading-description">
          {prince.desc}
        </p>
      </div>
      <div>
        <img src= {prince.image} alt="image of a black mountain"/>
        <p className="heading-title">{prince.title}</p>
        <p className="heading-description">
          {prince.desc}
        </p>
      </div> */}
      </>
      ) )}

    </div>

    
    {/* img div ends here */}
   </div>
    </section>
    </div>
  )
}

export default Serv
