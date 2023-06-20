import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Create from './Pages/Create'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </Router>
  )
}

export default App;
