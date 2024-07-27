import './App.css';
import AddBook from './AddBook';
import { Route, Routes } from 'react-router-dom';
import Booklist from './BookList';
import SingleBook from './SingleBook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Booklist />}/>
        <Route path='/add-book' element={<AddBook />}/>
        <Route path='/book/:id' element={<SingleBook />}/>
      </Routes>
    </div>
  );
}

export default App;
