import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./DashBoard/Dashboard";
import MyOrder from "./OrderManagement/MyOrder/MyOrder";
import PlaceOrder from "./OrderManagement/PlaceOrder/PlaceOrder";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Review from "./Pages/Review/Review";
import PrivateRoute from "./Pages/UseFirebase/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/allProducts">
              <AllProducts/>
            </Route>
            <Route path="/review">
              <Review/>
            </Route>
            <Route path="/register">
              <Registration/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/placeOrder/:orderItemId">
              <PlaceOrder/>
            </PrivateRoute>
            <Route path="/myOrder">
              <MyOrder/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
