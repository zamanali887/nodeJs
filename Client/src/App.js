import 'bootstrap/dist/js/bootstrap.bundle';
import './App.scss';
import AddTodo from './pages/AddTodo';
import TodoTable from './pages/TodoTable';

function App() {
  return (
    <div>
     <AddTodo/>
     <TodoTable/>
    </div>
  );
}

export default App;
