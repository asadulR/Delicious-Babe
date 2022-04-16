import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Auth/RequireAuth';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Menu from './Pages/Menu/Menu';
import AllTimeBest from './Pages/Menu/Menus/AllTimeBest';
import Bruschetti from './Pages/Menu/Menus/Bruschetti';
import Cheese from './Pages/Menu/Menus/Cheese';
import Meal from './Pages/Menu/Menus/Meal';
import Snacks from './Pages/Menu/Menus/Snacks';
import Vegetables from './Pages/Menu/Menus/Vegetables';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/menu' element={<Menu />}>
          <Route path='cheese' element={<Cheese />}></Route>
          <Route path='bruschetti' element={<Bruschetti />}></Route>
          <Route path='vegetables' element={
            <RequireAuth>
              <Vegetables />
            </RequireAuth>
          }></Route>
          <Route path='snacks' element={<Snacks />}></Route>
          <Route path='all-time-best' element={<AllTimeBest />}></Route>
          <Route path='family-meal' element={<Meal />}></Route>
        </Route>
        <Route path='about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>

    </>
  );
}

export default App;
