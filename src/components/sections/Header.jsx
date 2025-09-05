import linkedinImg from '../../assets/Linkedin.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={linkedinImg} alt="Foto de Flávio Gomes Menezes Porto" className="profile-pic-large" />
        <h1>Flávio Gomes Menezes Porto</h1>
        <span>22 anos</span>
        <span>Uberaba - MG</span>
        <span className="role">Desenvolvedor Full-Stack</span>
      </div>
    </header>
  );
};

export default Header;
