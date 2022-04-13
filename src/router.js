import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './pages/Home'

const Rutas = () => {  
    return (
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
    )
  }
  
  const Routing = () => {
    return (
        <Rutas/>
    )
  }
  
  export default Routing
  