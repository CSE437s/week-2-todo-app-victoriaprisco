import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import NewTodo from './Components/NewTodo.js';
import List from './Components/List.js';
import TodoItem from './Components/TodoItem.js';

function App() {
  
  return (
    <div className="App">
      <Header />
      <NewTodo />
      <List />
    </div>
  );
}

export default App;
