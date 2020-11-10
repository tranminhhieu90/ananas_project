import "./App.css";
import SubMenu from "../src/component/subMenu";
import MainMenu from "../src/component/mainMenu";
import NewFeed from "../src/component/carouselNewFeed";
import CartFix from "../src/component/cartFix";
import ShareFix from "../src/component/shareFix";
import AdCollection from "../src/component/adCollection";
import HomeBuy from "../src/component/homeBuy";
import "antd/dist/antd.css";
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
    </>
  );
}

export default App;
