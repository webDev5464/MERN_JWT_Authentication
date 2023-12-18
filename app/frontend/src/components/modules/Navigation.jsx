import { Link, NavLink } from "react-router-dom"

export default function Navigation() {
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
        <div className="navBtn">
          Login And Register
        </div>

        <div className="navBtnContent">
          <ul>
            <li>
              <Link to={'login'}>Login</Link>
            </li>
            <li>
              <Link to={'register'}>Register</Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  )
}