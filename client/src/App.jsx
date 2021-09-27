import { Route, Redirect } from "react-router-dom";

//Import HOC
import HomeLayoutHoc from "./HOC/Home.Hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.Hoc";

//Component
import Temp from "./Components/Temp";

//Pages
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Reviews from "./Page/Restaurant/Reviews";
import Menu from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";

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

      <HomeLayoutHoc path="/:type" exact component={Home} />

    {/*   <RestaurantLayoutHoc path="/restaurant/:id" exact component={Temp}/> Delete */}
      <RestaurantLayoutHoc path="/restaurant/:id/overview" exact component={Overview} />
      <RestaurantLayoutHoc path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantLayoutHoc path="/restaurant/:id/reviews" exact component={Reviews} />
      <RestaurantLayoutHoc path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHoc path="/restaurant/:id/photos" exact component={Photos} />
    </>
  );
};

export default App;
