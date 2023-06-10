
import './App.css';
import Home from './Home';
import Error from './Error';
import SingleMovie from './SingleMovie'

import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="movie/:id" element={<SingleMovie/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>   

      </>
  );
}
// const {id}=useParams()
export default App;
