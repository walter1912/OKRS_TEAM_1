import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from '~/page/HomePage';
import LoginPage from '~/page/LoginPage';
import RegisterPage from '~/page/RegisterPage';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
