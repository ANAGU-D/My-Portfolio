import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/body/body';
import Header from './components/header/header';
function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element= {<Body/>}/> 
  
        </Routes>
       
      </Router> 
    </div>
  );
}

export default App;
