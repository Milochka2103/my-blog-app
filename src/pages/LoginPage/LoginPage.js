import './LoginPage.css'

export const LoginPage = ({setIsLoggedIn}) => {
  const logIn = () => {

    setIsLoggedIn(true)
  }

  return (
    <form onSubmit={logIn} className="LoginForm">
      <h1>Authorization</h1>
      <div>
        <input type="text" placeholder="Enter your login" name="login" required />
      </div>
      <div>
        <input type="password" placeholder="Password" name="password" required />
      </div>
      <div>
        <button type='submit'>Sign in</button>
      </div>
    </form>
  )
}