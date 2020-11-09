import './App.css';
import SubMenu from '../src/component/subMenu';
import MainMenu from '../src/component/mainMenu';
import NewFeed from '../src/component/carouselNewFeed';
import CartFix from '../src/component/cartFix';
import ShareFix from '../src/component/shareFix';
import AdCollection from '../src/component/adCollection';
import 'antd/dist/antd.css';
function App() {
  return (
    <>
      <SubMenu/>
      <MainMenu/>
      <NewFeed/>
      <CartFix/>
      <ShareFix/>
      <div style={{marginTop: 80}}>
        <AdCollection/>
      </div>
    </>
  );
}

export default App;
