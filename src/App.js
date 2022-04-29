import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePages/Home/Home';
import Login from './Components/RoutePages/Authentication/Login/Login';
import Registration from './Components/RoutePages/Authentication/Registration/Registration';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
