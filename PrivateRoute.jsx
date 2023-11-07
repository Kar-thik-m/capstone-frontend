import { Navigate } from "react-router-dom";


const PrivateRoute = ({ element }) => {
  if (localStorage.getItem('item') && JSON.parse(localStorage.getItem('user'))) {
    return element;
  }

  return <Navigate to={'/login'} replace />
}


export default PrivateRoute;