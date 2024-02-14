import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import {Route,Routes} from'react-router-dom';
import Home from './router/home';
import BoardList from './router/boardlist';
import BoardDetail from './router/boardDetail';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:IDX" element={<BoardDetail />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
