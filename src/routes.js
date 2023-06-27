import Header from './components/Header/index.jsx';
import Rodape from './components/Rodape/index.jsx';
import Destaques from './pages/Destaques/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Destaques />}>
          </Route>
        </Routes>
        <Rodape />
      </Router>
    </main>
  );
}
