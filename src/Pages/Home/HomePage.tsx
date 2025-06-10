import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Serv from '../../Components/ServSection/Serv'
import Quote from '../../Components/QuoteSection/Quote'
import Abt from '../../Components/AboutSection/Abt'
import Quest from '../../Components/QuestSection/Quest'
import Foot from '../../Components/FooterSection/Foot'
import Navbar2 from '../../Components/Navbar/Navbar2'


const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
      <h1><a href="/Blog">See latest News</a></h1>
    <Navbar2/>
    {/* <Navbar/> */}
    {/* <Hero/> */}
    <Serv/>
    {/* <Quote/> */}
    {/* <Abt/> */}
    {/* <Quest/> */}
    {/* <Foot/>     */}
    </div>
  )
}

export default HomePage