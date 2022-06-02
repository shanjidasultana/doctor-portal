import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/Login/Firebase/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
function App() {
  return (
    <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route  path="/home">
                <Home></Home>
              </Route>
              <Route  path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <PrivateRoute  path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>
              <Route  path="/login">
                <Login></Login>
              </Route>
              <Route  path="/register">
                <Register></Register>
              </Route>
            </Switch>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
