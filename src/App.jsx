// src/App.js
import './App.css';
import SumaryCard from './components/SumaryCard'; // Importa el componente que creaste
import './styles/styles.scss'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div className="App">
      <SumaryCard />
    </div>
  );
};

export default App;