import "./Foot.css"

const Foot = () => {
  return (
    <div>
      <footer>
      <section className="footer-section">
        <div>
          <ul className="navlink-footer">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div>
          <img src="./images/logo-green.svg" alt=""/>
        </div>
        <div>
          <p>Love Nature by Tyler Moore</p>
        </div>
      </section>
     </footer>
    </div>
  )
}

export default Foot
