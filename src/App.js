import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts';
import Edit from './Components/Contacts/Edit';

function App() {
  return (
    <div className="App">
      <Router>
      <div className='container'>
      <Routes>
          <Route index path='/' element={<Contacts />} />
          <Route path='/edit/:id' element={<Edit />} >
          </Route>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
