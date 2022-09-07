import StaffList from './StaffList';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CheckOut from './CheckOut';
import StaffDetail from './StaffDetail';
import HAjpg from './HA.jpg';


function App() {
  return (
    <BrowserRouter >
         <nav className='nav'>
          <img src={HAjpg} width="80px" />
          <ul className='navItem'>
            <li><Link to="/">Staff List</Link></li>
            <li><Link to="/staffdetail">Staff Detail</Link></li>
            <li><Link to="/checkout">Check Out</Link></li></ul>
        </nav>     
      <Routes>
        <Route path="/" element={<StaffList/>}/>

        <Route path="/staffdetail" element={<StaffDetail/>}>
          <Route path=":id" element={<StaffDetail/>}/>
        </Route>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
