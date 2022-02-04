import './App.css';
import Header from './Header';
import Gamespace from './Gamespace';

function App() {
  return (
    <>
    <Header title='Double 7' subTitle='A religious "dominoes-style" card game for all ages!' />
    <Gamespace box='Gamespace' button1='New Game' button2='Number of Players' button3="Shuffle & Deal" />
    </>
  )}
export default App;
