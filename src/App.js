import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/NavBar/CartWidget";


// Componente
function App() {
  let misEstilos = { backgroundColor: "darkgrey" };

  return (
    <div style={misEstilos}>
      <ItemListContainer greeting="Bienvenidos a nuestra plataforma de cursos" />
    </div>
  );
}

export default App;