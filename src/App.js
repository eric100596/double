import './App.css';
import Header from './Header';
import Gamespace from './Gamespace';


function App() {
  return (
    <>
      <div className='parentContainer'>
        <Header title='Double-7' 
        subTitle='A religious "dominoes-style" card game for all ages!' />
        <Gamespace button='New Game' button='Number of Players' button="Shuffle & Deal" />
      </div>
    
    </>
  )}
export default App;
