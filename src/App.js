import { useState } from 'react'
import './App.css'
import Navigation from './Navigation'
import { Routes, Route } from 'react-router-dom'
import GenericView from './views/GenericView'

function App() {
    const [isEnabled, setIsEnabled] = useState(true)
    const [inputValue, setInputValue] = useState('')

    // useEffect(() => {
    //     props.setInputValue('')
    // }, [title])

    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route
                    path='/'
                    element={
                        <GenericView
                            title='Home'
                            heroText={'Home Hero'}
                            props1={1}
                            props2={2}
                            props3={3}
                        />
                    }
                />
                <Route
                    path='/about'
                    element={
                        <GenericView
                            title='About'
                            heroText={'About Hero'}
                            setInputValue={setInputValue}
                            props1={1}
                            props2={2}
                            props3={3}
                        />
                    }
                />
            </Routes>
            <div>
                <input
                    type='text'
                    placeholder='Generic placeholder'
                    disabled={!isEnabled}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <button
                    onClick={(anyName) => {
                        console.log(anyName)
                        setIsEnabled(!isEnabled)
                    }}
                >
                    {isEnabled ? 'Disable button' : 'Enable button'}
                </button>
                <h6>Input value: {inputValue}</h6>
            </div>
            <footer>
                <Navigation />
            </footer>
        </div>
    )
}

export default App
