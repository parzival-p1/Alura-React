import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home.jsx"
import Sobre from "./pages/Sobre.jsx"

import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';


function App() {
  
  //? Redireccion de rutas
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>

    </Router>
  );
}

export default App;
