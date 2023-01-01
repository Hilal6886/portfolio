import React, { useState } from "react"
import "./header.css"


const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logoz'>
            <h2>CRESCENT-AR</h2>
            
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#features'>FEATURES</a>
              </li>
              <li>
                <a href='#portfolio'>PORTFOLIO</a>
              </li>
              <li>
                <a href='#resume'>RESUME</a>
              </li>
              <li>
                <a href='#clients'>CLIENTS</a>
              </li>
              <li>
                <a href='#blog'>BLOG</a>
              </li>
              <li>
                <a href='#contact'>CONTACT</a>
              </li>
              <li>
                <button className='home-btn'>Hire Me</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
      <section className="demo"> </section>
    </>
  )
}

export default Header
