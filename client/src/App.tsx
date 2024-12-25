import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div 
    // style={{width:"100vw",height:"100vh"}}
    style={{margin:0,padding:0, boxSizing:"border-box" }}
    >
      <NavBar></NavBar>
      <HomePage></HomePage>
      {/* <h1 className='bg-dark'>Hello World</h1> */}
    </div>
  )
}

export default App
