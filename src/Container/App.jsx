import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Registre";
import Alta from "../Pages/Alta";
function App() {
    return ( 
        <BrowserRouter>
        <Routes>
            
               <Route path="/login" element={<Login/>}/>
              <Route path='/register' element={<Register/>}   />
              <Route path='/autobus' element={<Alta/>}   />
             
        </Routes>
        </BrowserRouter>
     );
}

export default App;