
import Login from '../Pages/Login'

function Auth({ children }) {
    const token = localStorage.getItem("token")
  return (
    <>
      {token ? children : <Login />}
    </>
  )
}

export default Auth
