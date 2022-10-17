import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/NavBar/CartWidget";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemDeailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


// Componente
function App() {
  let misEstilos = { backgroundColor: "darkgrey" };

  return (
    <div style={misEstilos} className="main">
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
    <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra plataforma de cursos" />}/>
    <Route path="/detail/:id" element={<ItemDeailContainer/>}/>
    <Route path="*" element={<h4>Error 404 - Not Found</h4>} />
    <Route path="/category/:categoryId" element={<ItemListContainer />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;