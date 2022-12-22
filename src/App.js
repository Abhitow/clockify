import './App.css';
// import Register from './pages/RegisterForm';
// import Formikk from './pages/Formikk'
import Homepage from './pages/Homepage';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './pages/Loginpage';
import Register from './pages/RegisterForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Homepage />}/>
        </Routes>
      </BrowserRouter>
      {/* <Formikk /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
