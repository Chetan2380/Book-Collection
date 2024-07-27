import './App.css';
import AddBook from './components/AddBook';
import { Route, Routes } from 'react-router-dom';
import Booklist from './components/BookList';
import SingleBook from './components/SingleBook';
import Navbar from './components/Navbar';

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
