import { Routes, Route, Link } from 'react-router-dom';
import ProjetoIntelliWrite from './pages/projetoIntelliWrite';
import ProjetoCarrinho from './pages/projetoCarrinho';
import ProjetoOculos from './pages/projetoOculos';
import linkedinImg from './assets/Linkedin.png';
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <img src={linkedinImg} alt="Flavio" className="profile-pic-large" />
          <div>
            <h1>Flávio Gomes Menezes Porto</h1>
            <h2 className="subtitle">Desenvolvedor de Sistemas & Inteligência Artificial</h2>
            <p className="subtitle">Transformando ideias em soluções digitais</p>
          </div>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section className="sobre-mim">
                <h2>Sobre Mim</h2>
                <p className="sobre-mim-text">
                  Sou desenvolvedor com experiência em sistemas, automação e inteligência artificial. Apaixonado por tecnologia, busco entregar soluções inovadoras e funcionais para empresas e pessoas.
                </p>
              </section>
              <section className="projetos">
                <h2>Projetos</h2>
                <div className="projetos-lista">
                  <div className="projeto-card">
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Óculos Deficiente Visual" className="projeto-img" />
                    <h3>Óculos para Deficientes Visuais</h3>
                    <p>Protótipo para auxiliar deficientes visuais, integrando sensores e software embarcado.</p>
                    <Link to="/projeto-oculos" className="projeto-btn">Ver detalhes</Link>
                  </div>
                  <div className="projeto-card">
                    <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Carrinho Autônomo" className="projeto-img" />
                    <h3>Carrinho Autônomo</h3>
                    <p>Automação de processos em varejo com robótica e IoT.</p>
                    <Link to="/projeto-carrinho" className="projeto-btn">Ver detalhes</Link>
                  </div>
                  <div className="projeto-card">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="IntelliWrite AI" className="projeto-img" />
                    <h3>IntelliWrite AI</h3>
                    <p>Plataforma de correção automática de redações usando Machine Learning e Python.</p>
                    <Link to="/projeto-intelliwrite" className="projeto-btn">Ver detalhes</Link>
                  </div>
                </div>
              </section>
              <section className="habilidades">
                <h2>Habilidades</h2>
                <ul className="habilidades-lista">
                  <li>⚛️ React</li>
                  <li>🐍 Python</li>
                  <li>☕ Java</li>
                  <li>🟨 JavaScript</li>
                  <li>🎨 CSS</li>
                  <li>📄 HTML</li>
                  <li>🗄️ MySQL</li>
                  <li>🗄️ Oracle</li>
                  <li>🟩 Vue</li>
                </ul>
              </section>
              <section className="formacao-experiencia">
                <div className="formacao-cards">
                  <h2>Formação</h2>
                  <div className="card-list">
                    <div className="card">
                      <h3>UNIUBE, Uberaba</h3>
                      <p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
                      <span className="card-status">Cursando</span>
                    </div>
                    <div className="card">
                      <h3>Senac Minas</h3>
                      <p>Técnico em Desenvolvimento de Sistemas</p>
                      <span className="card-status">Finalizado em 2025</span>
                    </div>
                  </div>
                </div>
                <div className="experiencia-cards">
                  <h2>Experiência</h2>
                  <div className="card-list">
                    <div className="card">
                      <h3>Assistente Administrativo</h3>
                      <p>Nova Fertil Insumos Agropecuários</p>
                      <span className="card-status">2018 - 2019</span>
                    </div>
                  </div>
                </div>
              </section>
              <section className="contato">
                <h2>Contato</h2>
                <div className="contato-lista">
                  <a href="mailto:flavioporto203@gmail.com" className="contato-item">✉️ flavioporto203@gmail.com</a>
                  <a href="https://www.linkedin.com/in/flavio-porto-a50807251" target="_blank" className="contato-item">💼 LinkedIn</a>
                </div>
              </section>
            </>
          } />
          <Route path="/projeto-intelliwrite" element={<ProjetoIntelliWrite />} />
          <Route path="/projeto-carrinho" element={<ProjetoCarrinho />} />
          <Route path="/projeto-oculos" element={<ProjetoOculos />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Flávio Gomes Menezes Porto. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
