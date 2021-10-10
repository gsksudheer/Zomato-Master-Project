import { Route, Redirect } from "react-router-dom";

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
//React-Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
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
