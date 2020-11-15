import "./App.css";
import SubMenu from "../src/component/subMenu";
import MainMenu from "../src/component/mainMenu";
import NewFeed from "../src/component/carouselNewFeed";
import CartFix from "../src/component/cartFix";
import ShareFix from "../src/component/shareFix";
import AdCollection from "../src/component/adCollection";
import HomeBuy from "../src/component/homeBuy";
import BestSeller from "../src/component/bestSeller";
import Footer from "../src/component/footer";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <SubMenu />
      <MainMenu />
      <NewFeed />
      <CartFix />
      <ShareFix />
      <AdCollection />
      <HomeBuy />
      <BestSeller />
      <Footer />
    </>
  );
}

export default App;
