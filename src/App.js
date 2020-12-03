import './App.css';
import { RestaurentAndSearchContainer } from './containers/restaurantDetailContainer'
import Header from './components/Header/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <RestaurentAndSearchContainer/>
    </div>
  );
}

export default App;
