import Home from './page/Home';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Recipe from './page/Recipe';
import Menu from './page/Menu';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Recipe' element={<Recipe/>}/>
    <Route path='/Menu' element={<Menu/>}/>
  </Routes>
  <Footer/>
  </div>
  );
}

export default App;
