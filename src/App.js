import logo from './logo.svg';
import './App.css';

import TypeContainer from './Components/TypeContainer';
import Navbar from './Components/Navbar';
import tree_1 from './Components/images/trees_4.svg';
import tree_2 from './Components/images/trees_5.svg';
import birds from './Components/images/birds_1.svg';
import linkedin from './Components/images/linkedin.png';
import insta from './Components/images/instagram.png';
import git from './Components/images/github.png';
import Info from './Components/Info';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import bg from './Components/images/bg.jpg';

function App() {
  return (
    <div className="App">
      <div className="navbar"><Navbar /></div>
      <img className="tree-1" src={tree_1} alt="" />
      <img className="tree-1" src={tree_2} alt="" />
      <img className="birds" src={birds} alt="" />
      <Router>
        <Routes>
        <Route path="/" element={<TypeContainer />} />
          <Route path="/info" element={<Info/>} />
          
          {/* Add more routes for additional pages */}
        </Routes>
      </Router>
      {/* <div className="type-container"><TypeContainer /></div> */}
      <div className="footer">
        <div> <a className="linkedin" href="https://www.linkedin.com/in/aditya-singh22/">LinkedIn<img className='img' src={linkedin} alt="" height={30} width={30}/></a> </div>
        <div > <a className="github" href="https://github.com/AdityaSingh021">Github<img className='img' src={git} alt="" height={30} width={30}/></a> </div>
        <div > <a className="instagram" href="https://www.instagram.com/singh.adi1/">Instagram<img className='img'src={insta} alt="" height={30} width={30} /></a> </div>
      </div>
    </div>
  );
}

export default App;

/* <Router>
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  {/* Add more routes for additional pages
</Switch>
</Router> */
