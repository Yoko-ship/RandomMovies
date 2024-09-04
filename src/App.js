import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import AboutUs from './components/About-us';
import Contacts from './components/Contacts';
import Linking from './components/Linking';
import MainPage from './components/MainPage';
import Vibe from './components/Vibe';







function App(props) {
  const routingData = props.filter?.map((route)=><Route key={route.path} path={route.path} element={<Linking src={route.src}/>}/>)
  const routeVibeData = props.data?.map((vibing) => <Route key={vibing.path} path={vibing.path} element={<Linking src={vibing.src}/>}/>)
  return (
    <>
      <Router>
        <header>
          <ul>
            <li>
              <Link to="/" className='a'>Главная</Link>
            </li>

            <li>
              <Link to="/vibe">Вайб</Link>
            </li>

            <li>
              <Link to="/about">О нас</Link>
            </li>

            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/vibe' element={<Vibe/>}/>
          {routingData}

          {routeVibeData}
        </Routes>
      </Router>
    </>
  );
}

export default App;
