import './App.css';
// import Register from './pages/RegisterForm';
// import Formikk from './pages/Formikk'
import Homepage from './pages/Homepage';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './pages/Loginpage';
import Register from './pages/RegisterForm';
import Timesheet from './pages/Timesheet';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/timesheet' element={<Timesheet />} />
        </Routes>
      </BrowserRouter>
      {/* <Formikk /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
