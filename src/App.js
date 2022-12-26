import './App.css';
import Homepage from './pages/Homepage';
import { Routes , Route} from 'react-router-dom'
import Login from './pages/Loginpage';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route index path='/' element={<Login />}></Route>
          <Route path='/home' element={<Homepage />} />
          <Route path='*' element={<Homepage />}/>
        </Routes>
    </div>
  );
}

export default App;
