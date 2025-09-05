import './App.css';
import Header from './components/sections/Header';
import CartaApresentacao from './components/sections/CartaApresentacao';
import Experiencia from './components/sections/Experiencia';
import Formacao from './components/sections/Formacao';
import Habilidades from './components/sections/Habilidades';
import InfoAdicional from './components/sections/InfoAdicional';
import Projetos from './components/sections/Projetos';
import Servicos from './components/sections/Servicos';
import Contato from './components/sections/Contato';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <Header />
      <CartaApresentacao />
      <main>
        <Experiencia />
        <Formacao />
        <Habilidades />
        <InfoAdicional />
        <Projetos />
        <Servicos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App