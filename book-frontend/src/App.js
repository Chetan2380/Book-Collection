import './App.css';
import AddBook from './AddBook';
import { Route, Routes } from 'react-router-dom';
import Booklist from './BookList';
import SingleBook from './SingleBook';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Booklist />}/>
        <Route path='/add-book' element={<AddBook />}/>
        <Route path='/singlebook/:id' element={<SingleBook />}/>
      </Routes>
    </div>
  );
}

export default App;
