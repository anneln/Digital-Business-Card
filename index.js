import React from'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'


function App() {
    return (
        <div className='digitalBusinessCard'>
            <Header />
            <About />
            <Interests />
            <Footer />
        </div> 
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
