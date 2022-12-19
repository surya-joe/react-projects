import './App.css';
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { AllUsers } from './components/AllUsers';
import { AddUser } from './components/AddUser';
import { UpdateUser } from './components/UpdateUser';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/all' element={<AllUsers />} exact />
          <Route path='/add' element={<AddUser />} exact />
          <Route path='/edit/:id' element={<UpdateUser />} exact />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
