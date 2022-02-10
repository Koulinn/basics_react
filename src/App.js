import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation'
import { Routes, Route } from 'react-router-dom'
import GenericView from './views/GenericView'

function App() {
    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route
                    path='/'
                    element={
                        <GenericView title='Home' heroText={'Home Hero'} />
                    }
                />
                <Route
                    path='/about'
                    element={
                        <GenericView title='About' heroText={'About Hero'} />
                    }
                />
            </Routes>
            <footer>
                <Navigation />
            </footer>
        </div>
    )
}

export default App;
