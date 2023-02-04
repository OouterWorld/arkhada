import Cabecalho from './components/Cabecalho/index.jsx';
import Rodape from './components/Rodape/index.jsx';
import Destaques from './pages/Destaques/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Cabecalho />
        <Routes>
          <Route path='/' element={<Destaques />}>
          </Route>
        </Routes>
        <Rodape />
      </Router>
    </main>
  );
}