import { BrowserRouter,Routes, Route } from "react-router-dom";
import FormLogin from "../Pages/FormLogin";
function App() {
    return ( 
<BrowserRouter>
        <Routes>
        <Route path="/login" element={<FormLogin/>}/>
        </Routes>
        </BrowserRouter>
     );
}

export default App;
