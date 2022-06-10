import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title="Churros Manolo" description="Las mejores churros de Mar del Plata"/>
    </div>
  );
}

export default App;
