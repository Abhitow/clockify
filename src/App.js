import './App.css';
// import Register from './pages/RegisterForm';
// import Formikk from './pages/Formikk'
import Homepage from './pages/Homepage';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './pages/Loginpage';
import Register from './pages/RegisterForm';
import Timesheet from './pages/Timesheet';
import EditButton from './components/EditButton';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/timesheet' element={<Timesheet />} />
          <Route path='/edit' element={<EditButton />}></Route>
           
        </Routes>
      </BrowserRouter>
      {/* <Formikk /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
