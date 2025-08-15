import { Routes, Route } from 'react-router-dom';
import linkedinImg from './assets/Linkedin.png';
import Servicos from './pages/Servicos';
import './App.css';

function App() {
  return (
    <>
      <header className="header" style={{background: "#181a20", padding: "2rem 0", boxShadow: "0 2px 8px rgba(0,0,0,0.18)"}}>
        <div className="header-content" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
          <img src={linkedinImg} alt="Foto de Flávio Gomes Menezes Porto" className="profile-pic-large" style={{width: "120px", height: "120px", borderRadius: "50%", boxShadow: "0 2px 8px rgba(0,0,0,0.18)"}} />
          <h1 style={{margin: 0, fontSize: "2.2rem", fontWeight: 700, color: "#00dfd8"}}>Flávio Gomes Menezes Porto</h1>
          <span style={{fontSize: "1.1rem", color: "#fff"}}>22 anos</span>
          <span style={{fontSize: "1.1rem", color: "#fff"}}>Uberaba - MG</span>
          <span style={{fontWeight: "bold", color: "#00dfd8", fontSize: "1.1rem"}}>Profissional</span>
        </div>
      </header>
      <section className="section carta-apresentacao-section" style={{margin: "2rem auto", maxWidth: "700px", background: "#23243a", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.18)", padding: "2rem"}}>
        <h2 className="section-title">Carta de Apresentação</h2>
        <p style={{fontSize: "1.15rem", lineHeight: "1.7", color: "#eaeaea"}}>
          Olá! Meu nome é Flávio Gomes Menezes Porto. Sou apaixonado por tecnologia e inovação, com experiência em desenvolvimento de sistemas, automação e inteligência artificial.
          Busco sempre entregar soluções digitais que agreguem valor e eficiência para meus clientes.
          Estou pronto para transformar ideias em projetos reais, com dedicação, ética e profissionalismo.
        </p>
      </section>
      <main>
        <section className="section experiencia-section">
          <h2 className="section-title">Experiência</h2>
          <div className="card-list">
            <div className="card">
              <h3>Assistente Administrativo</h3>
              <p>Nova Fertil Insumos Agropecuários, Brasilândia de Minas</p>
              <span className="card-status">Janeiro/18 - Janeiro/19</span>
              <ul>
                <li>Organização de estoque</li>
                <li>Baixa em pagamentos</li>
                <li>Atendimento de clientes</li>
                <li>Venda de insumos agrícolas</li>
                <li>Apoio nas atividades gerais da loja</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section formacao-section">
          <h2 className="section-title">Formação</h2>
          <div className="card-list formacao-cards">
            <div className="card">
              <h3>Engenharia da Computação</h3>
              <p>Instituto Federal do Triângulo Mineiro, Campus Avançado Uberaba Parque Tecnológico</p>
              <span className="card-status">4º Período - Encerrado (Março de 2022)</span>
            </div>
            <div className="card">
              <h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
              <p>UNIUBE, Uberaba</p>
              <span className="card-status">5º Período - Cursando (Fevereiro de 2024)</span>
            </div>
            <div className="card">
              <h3>Técnico Em Desenvolvimento de Sistemas</h3>
              <p>Senac Minas</p>
              <span className="card-status">5º Período - Finalizado em Julho de 2025</span>
              <a 
                href="/public/DiplomaTI.jpg" 
                download 
                className="contato-item"
                style={{marginTop: '0.7rem'}}
              >
                📄 Baixar Certificado
              </a>
            </div>
          </div>
        </section>
        <section className="section habilidades-section">
          <h2 className="section-title">Competências</h2>
          <div className="card-list">
            <div className="card">
              <h3>Soft Skills</h3>
              <ul className="habilidades-lista">
                <li>Persistência</li>
                <li>Foco</li>
                <li>Trabalho em equipe</li>
                <li>Solução de Problemas</li>
                <li>Pontualidade</li>
              </ul>
            </div>
            <div className="card">
              <h3>Linguagens de Programação</h3>
              <ul className="habilidades-lista">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>C</li>
              </ul>
            </div>
            <div className="card">
              <h3>Frameworks & Bibliotecas</h3>
              <ul className="habilidades-lista">
                <li>React</li>
                <li>Vue</li>
              </ul>
            </div>
            <div className="card">
              <h3>Banco de Dados</h3>
              <ul className="habilidades-lista">
                <li>MySQL</li>
                <li>Oracle</li>
              </ul>
            </div>
            <div className="card">
              <h3>Ferramentas</h3>
              <ul className="habilidades-lista">
                <li>Excel Avançado</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section info-adicional-section">
          <h2 className="section-title">Informações Adicionais</h2>
          <ul className="habilidades-lista">
            <li>Programação Para Leigos e Informática do Básico ao Avançado (2023)</li>
            <li>Palestra Sobre Inteligência Artificial (2022)</li>
            <li>Palestra Sobre Introdução a Investimentos (2022)</li>
            <li>Palestra Sobre empregabilidade em tecnologia de informação (2022)</li>
            <li>Palestra Bate-Papo sobre empregabilidade/estágio/requisitos/o perfil do profissional (2023)</li>
            <li>Certificação Lean Six Sigma White Belt (2023)</li>
            <li>Curso completo de Microsoft Excel (2023)</li>
            <li>Database Foundations - Oracle Academy (2024)</li>
            <li>JavaScript Essentials 1 - Cisco Networking Academy (2024)</li>
          </ul>
        </section>
        <section className="section projetos-section">
          <h2 className="section-title">Projetos</h2>
          <div className="projetos-lista">
            <div className="projeto-card">
              <h3>Protótipo de Óculos para Deficientes Visuais</h3>
              <span className="card-status">2022</span>
              <p>Projeto Integrado — Desenvolvimento de protótipo para acessibilidade.</p>
            </div>
            <div className="projeto-card">
              <h3>Carrinho Autônomo para Varejo</h3>
              <span className="card-status">2023</span>
              <p>Projeto Integrado — Construção de protótipo de carrinho autônomo para automatização de empresas de varejo.</p>
            </div>
            <div className="projeto-card">
              <h3>INTELLIWRITE AI</h3>
              <span className="card-status">Iniciação Científica</span>
              <p>Plataforma de análise e correção automática de redações usando Machine Learning e Python.</p>
            </div>
            <div className="projeto-card">
              <h3>Prontuário Eletrônico</h3>
              <span className="card-status">2025</span>
              <p>Sistema para gestão de prontuários eletrônicos em clínicas e hospitais.</p>
              <a 
                href="/public/prontuarios-1.0-SNAPSHOT-jar-with-dependencies.jar" 
                download 
                className="contato-item"
                style={{marginTop: '0.7rem'}}
              >
                ⬇️ Baixar Prontuário Eletrônico (Java)
              </a>
            </div>
          </div>
        </section>
        <Routes>
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
        <section className="section contato-section">
          <h2 className="section-title">Contato</h2>
          <div className="contato-lista">
            <a href="tel:+55389888384845" className="contato-item">📞 (38) 9 98838-4845</a>
            <a href="mailto:flavioporto203@gmail.com" className="contato-item">✉️ flavioporto203@gmail.com</a>
            <a href="https://www.linkedin.com/in/flavio-porto-a50807251" target="_blank" rel="noopener noreferrer" className="contato-item">💼 LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Flávio Gomes Menezes Porto. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
export default App
