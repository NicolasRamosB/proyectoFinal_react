import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title="Churros Manolo" description="Las mejores churros de Mar del Plata"/>
      <ItemDetailContainer title="ItemDetailContainer"/>
    </div>
  );
}

export default App;
