import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navigation() {
  const [activeNavBtn, setActiveNavBtn] = useState(true)
  return (
    <nav>
      <section className="authNav">
        <div className="headingAndLogo">
          <h2>JWT_Auth</h2>
        </div>

        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'about'}>About</NavLink></li>
        </ul>
      </section>

      <section className="navBtnParent">
        <div className="navBtn" onClick={() => setActiveNavBtn(!activeNavBtn)}>
          Login And Register
        </div>

        <div className={activeNavBtn ? "navBtnContent none" : "navBtnContent block"}>
          <ul>
            <li>
              <Link to={'login'} onClick={() => setActiveNavBtn(!activeNavBtn)}>Login</Link>
            </li>
            <li>
              <Link to={'register'} onClick={() => setActiveNavBtn(!activeNavBtn)}>Register</Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  )
}