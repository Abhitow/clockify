import './App.css';
// import Register from './pages/RegisterForm';
// import Formikk from './pages/Formikk'
import Homepage from './pages/Homepage';
import { Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './pages/Loginpage';
import Timesheet from './pages/Timesheet';


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route index path='/' element={<Login />}></Route>
          <Route path='/home' element={<Homepage />} />
          <Route path='*' element={<Homepage />}/>
        </Routes>
      {/* <Formikk /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
