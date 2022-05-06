import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePages/Home/Home';
import Login from './Components/RoutePages/Authentication/Login/Login';
import Registration from './Components/RoutePages/Authentication/Registration/Registration';
import Footer from './Components/Shared/Footer/Footer';
import Inventory from './Components/RoutePages/Inventory/Inventory';
import RequireAuth from './Components/RoutePages/Authentication/RequireAuth/RequireAuth';
import Newitems from './Components/RoutePages/NewItems/Newitems';
import Notfound from './Components/RoutePages/404page/Notfound';
import ItemdetailandUpdate from './Components/RoutePages/ItemdetailandUpdate/ItemdetailandUpdate';
import Blogs from './Components/RoutePages/Blogs/Blogs';
import Myitems from './Components/RoutePages/Myitems/Myitems';
import auth from './firebse.init';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user, loading] = useAuthState(auth)
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path ='myitems' element={<RequireAuth>
          <Myitems></Myitems>
        </RequireAuth>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <ItemdetailandUpdate></ItemdetailandUpdate>
        </RequireAuth>}></Route>
        <Route path='/inventory/newitem' element={<RequireAuth>
          <Newitems></Newitems>
        </RequireAuth>}></Route>
        <Route path='/newitem' element={<RequireAuth>
          <Newitems></Newitems>
        </RequireAuth>}></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
