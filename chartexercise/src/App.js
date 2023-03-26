import './App.css';
// import Route and Routes for Routing
import { Route, Routes } from 'react-router-dom';
// bootstrap style sheet
import 'bootstrap/dist/css/bootstrap.min.css';
// Navbar
import MyNavbar from './components/navbar';
// 5 pages for 5 charts
import PageBar from './pages/pageBar';
import PageLine from './pages/pageLine';
import PagePie from './pages/pagePie';
import PagePolar from './pages/pagePolar';
import PageRadar from './pages/pageRadar';

function App() {
  return (
    <div className="App">
      {/* Navbar component to show on every page */}
      <MyNavbar />
      {/* Navbar Links to 5 pages with 5 charts */}
      <Routes>
        <Route path='/' element={<PageBar />} ></Route>
        <Route path='/line' element={<PageLine />} ></Route>
        <Route path='/pie' element={<PagePie />} ></Route>
        <Route path='/polar' element={<PagePolar />} ></Route>
        <Route path='/radar' element={<PageRadar />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
