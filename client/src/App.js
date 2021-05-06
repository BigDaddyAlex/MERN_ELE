import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/AppNavBar';
import Example from './components/AppNavBar';
import Collapser from './components/Collapser';

function App() {
  return (
    <div className="App">
      <Example/>
      <Collapser/>

    </div>
  );
}

export default App;
