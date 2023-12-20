import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/login';
import { CotizadorProvider } from "./context/CotizadorProvider"

function App() {

  return (
    <>
      <CotizadorProvider>
            <Login/>
      </CotizadorProvider>      
    </>
  )
}

export default App
