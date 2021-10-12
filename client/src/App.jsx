import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
//Import HOC
import HomeLayoutHoc from "./HOC/Home.Hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.Hoc";
import CheckoutLayoutHoc from "./HOC/Checkout.Hoc";

//Component
import Temp from "./Components/Temp";

//Pages
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Reviews from "./Page/Restaurant/Reviews";
import Menu from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";
import Checkout from "./Page/Checkout";
import RedirectRestaurant from "./Page/Restaurant/Redirect";
import GoogleAuth from "./Page/GoogleAuth";

//Redux actions
import { getMySelf } from "./Redux/Reducer/User/user.action";

//axios global settings
if(localStorage.zomatoUSer) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} 

//React-Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.zomatoUSer) dispatch(getMySelf());
  }, []);

  return (
    <>
    <Route path="/" exact>
      <Redirect to="/Delivery"/>
    </Route>

    <Route path="/restaurant/:id" exact>
      <Redirect to="/restaurant/:id/overview"/>
    </Route>
    {/* 
    <Route path="/restaurant/:id" exact comonent={RedirectRestaurant}/>
       <Redirect to="/restaurant/:id/overview"/>
    </Route>
    */}

      <HomeLayoutHoc path="/:type" exact component={Home} />
      <HomeLayoutHoc path="/google/:token" exact component={} />

    {/*   <RestaurantLayoutHoc path="/restaurant/:id" exact component={Temp}/> Delete */}
      <RestaurantLayoutHoc path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantLayoutHoc path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantLayoutHoc path="/restaurant/:id/reviews" exact component={Reviews} />
      <RestaurantLayoutHoc path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHoc path="/restaurant/:id/photos" exact component={Photos} />
      <CheckoutLayoutHoc path="/checkout/:id" exact component={Checkout} />
    </>
    
  );
};

export default App;
