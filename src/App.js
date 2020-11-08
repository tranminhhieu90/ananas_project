import './App.css';
import SubMenu from '../src/component/subMenu';
import MainMenu from '../src/component/mainMenu';
import NewFeed from '../src/component/carouselNewFeed';
import 'antd/dist/antd.css';
function App() {
  return (
    <>
      <SubMenu/>
      <MainMenu/>
      <NewFeed/>
    </>
  );
}

export default App;
