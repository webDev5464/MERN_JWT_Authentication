export default function Register() {
  const formHandler = (e) => {
    e.preventDefault()
  }
  return (
    <section className="formParent">
      <div className="formCard">
        <h2>Account Register</h2>
        <form onSubmit={formHandler}>
          <div className="inputDiv">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>

          <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="inputParentDiv">
            <div className="inputDiv">
              <label htmlFor="pass">Password</label>
              <input type="text" name="pass" id="pass" />
            </div>
            <div className="inputDiv">
              <label htmlFor="conPass">Confirm Password</label>
              <input type="conPass" name="conPass" id="conPass" />
            </div>
          </div>

          <div className="parentBtn">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </section>
  )
}