export default function Login() {
  return (
    <section className="formParent">
      <div className="formCard">
        <h2>Account Register</h2>
        <form>
          <div className="inputDiv">
            <label htmlFor="usernameAndEmail">Username or Email</label>
            <input type="text" name="usernameAndEmail" id="usernameAndEmail" />
          </div>

          <div className="inputParentDiv">
            <div className="inputDiv">
              <label htmlFor="pass">Password</label>
              <input type="text" name="pass" id="pass" />
            </div>
          </div>

          <div className="parentBtn">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </section>
  )
}