// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import MainRoutes from './routes/MainRoutes';
import { useSelector } from 'react-redux';

function App() {
    const {requestStatus} = useSelector((state) => state.setting)
    return (
        <BrowserRouter>
            <div className="App">
                {requestStatus === 'LOADING' && <Loading />}

                <MainRoutes />
            </div>
        </BrowserRouter>
    );
}

export default App;
