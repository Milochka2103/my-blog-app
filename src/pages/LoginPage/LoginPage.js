import { useRef } from 'react';
import './LoginPage.css';

export const LoginPage = ({setIsLoggedIn}) => {

  {/* useRef - инициализирует экзмепляр */}
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    {/* имитация авторизации */}
    const userData = {
      login: loginRef.current.value,
      password: passwordRef.current.value
    }

    console.log(userData);

    localStorage.setItem('isLoggedIn', true)

    setIsLoggedIn(true);
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <h1>Authorization</h1>
      <div>
        <input ref={loginRef} type="text" placeholder="Enter your login" name="login" required />
      </div>
      <div>
        <input ref={passwordRef} type="password" placeholder="Password" name="password" required />
      </div>
      <div>
        <button type='submit'>Sign in</button>
      </div>
    </form>
  )
}