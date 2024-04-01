import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import Contact from './components/Contact';
import NewProject from './components/NewProject';
import './App.css';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo projeto</Link>
      </div>
      <Routes>
        <Container customClass="min-height">

            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/company">
              <Company/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/newproject">
              <NewProject/>
            </Route>
        </Container>
      </Routes>

    </Router>
  );
}

export default App;
