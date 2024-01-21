import './App.css';
import Detail from './components/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Characters from './components/Characters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/character" exact element={<Characters />} />
        <Route path='/character/:id' element={<Detail/>}/>   
      </Routes>
    </BrowserRouter>

  );
}
export default App;
