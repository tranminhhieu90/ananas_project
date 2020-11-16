import "./App.css";
import SubMenu from "../src/component/subMenu";
import MainMenu from "../src/component/mainMenu";
import Footer from "../src/component/footer";
import NewFeed from "../src/component/carouselNewFeed";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from "../src/config/router";
function App() {
  return (
    <>
      <SubMenu />
      <MainMenu />
      <NewFeed />
      <Router />
      <Footer />
    </>
  );
}

export default App;
