import logo from './images/logo.png';
import star from './images/Star 1.png';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="hamburger">
         <div className="line line1"></div>
         <div className="line line2"></div>
         <div className="line line3"></div>
        </div>
      </header>
      <hr></hr>
      <section className="hero">
      <img src={star} alt="star" className="star" />
        <p className="intro-text">Welcome to Agape Garden Play School</p>
        <h1 className="hero-title">Build A Foundation For A Lifetime of Learning</h1>
        <button className="cta-button">Know Who We Are
        <button className="custom-button">
      <div className="icon-circle">
        <span className="arrow">➔</span>
      </div>
    </button>
        </button>
        <div className="stats">
          <img src="kids-placeholder.png" alt="Happy Kids" className="stats-image" />
          <p className="stats-text"><span className="stats-number">350+</span> Happy and Engaged Kids</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why Early Education <span className="highlight">Matters</span></h2>
        <div className="benefits">
          <h3>The Benefits of Early Education</h3>
          <p>
            High quality early childhood education and care gives children the best start in life.
            It provides important opportunities to learn and develop.
          </p>
          <button className="read-more">Read more</button>
        </div>
        <div className="images">
          <img src="kids-group1-placeholder.png" alt="Kids Playing" className="image"/>
          <img src="kids-group2-placeholder.png" alt="Kids Smiling" className="image"/>
        </div>
      </section>
    </div>
  );
};

export default App;
