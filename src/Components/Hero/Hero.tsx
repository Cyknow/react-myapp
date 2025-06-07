import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const Chris = () =>{
    // alert ("Hello Chris");
    navigate("/about");
  };
  return (
    <div>
      <section className="hero-section">
      <h3>we all love</h3>
    <h1>nature</h1>
    <p>Look deep into nature, and you will
      understand everything better.</p>
    <button> <a href="/Register"> Get Started</a> </button> 
  </section>
    
    <p onClick={Chris}>About Us</p>
    </div>
    
  )
}

export default Hero
