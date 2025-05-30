import './App.css'
import Abt from './Components/AboutSection/Abt'
import Foot from './Components/FooterSection/Foot'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Quest from './Components/QuestSection/Quest'
import Quote from './Components/QuoteSection/Quote'
import Serv from './Components/ServSection/Serv'

function App() {

  return (
    <>      
    <Navbar/>
    <Hero/>
    <Serv/>
    <Quote/>
    <Abt/>
    <Quest/>
    <Foot/>
    </>
  )
}

export default App
