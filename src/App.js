
import './App.css';
import { Provider } from './NotepadContext';
import Router from './Router';

function App() {
  return (
    <Provider>
      <div className="App">
        <Router />
      </div>
    </Provider>
    
  );
}

export default App;
