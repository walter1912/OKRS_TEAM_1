import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HomePage from '~/pages/HomePage';
import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditUserPage';
import CreateObjective from './pages/CreateObjective';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/user/edit' element={<EditUserPage />} />
        <Route path='/createObjective' element={<CreateObjective />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
