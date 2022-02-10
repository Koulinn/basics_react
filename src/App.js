import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation'
import About from './views/About'
import Home from './views/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <footer>
                <Navigation />
            </footer>
        </div>
    )
}

export default App;
