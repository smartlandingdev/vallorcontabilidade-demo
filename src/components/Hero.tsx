import React, { useState, useEffect } from 'react';
import './Hero.css';
import logo from '../assets/logo.png';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Imposto de Renda',
    subtitle: 'Organização e segurança nas suas declarações',
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1920&h=1080&fit=crop&q=95',
    cta: 'Saiba Mais'
  },
  {
    id: 2,
    title: 'Gestão de RH',
    subtitle: 'Soluções completas para sua equipe',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop&q=95',
    cta: 'Conheça Nossos Serviços'
  },
  {
    id: 3,
    title: 'Abertura de Empresa',
    subtitle: 'Comece do jeito certo',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop&q=95',
    cta: 'Iniciar Agora'
  },
  {
    id: 4,
    title: 'Assessoria Empresarial',
    subtitle: 'Estratégia e suporte para o crescimento do seu negócio',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop&q=95',
    cta: 'Fale Conosco'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      {/* Header moderno flutuante */}
      <div className="hero-header-wrapper">
        <img src={logo} alt="Vallor Contabilidade" className="hero-logo" />
        <header className="hero-header">
          <nav className="hero-nav">
            <a href="#home">Home</a>
            <a href="#empresa">Empresa</a>
            <a href="#servicos">Serviços</a>
            <a href="#links-uteis">Links Úteis</a>
            <a href="#certificado-digital">Certificado Digital</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>
      </div>

      {/* Carousel de slides */}
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            {/* Imagem de fundo */}
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            <div className="hero-slide-overlay"></div>

            {/* Conteúdo do slide */}
            <div className="hero-slide-content">
              <div className="hero-slide-text">
                <h1 className="hero-slide-title">{slide.title}</h1>
                <p className="hero-slide-subtitle">{slide.subtitle}</p>
                <button className="btn btn-hero">{slide.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de navegação */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          >
            <span className="hero-indicator-bar"></span>
          </button>
        ))}
      </div>

      {/* Low Hero - Cards no final */}
      <div className="low-hero">
        <div className="low-hero-container">
          {slides.map((slide) => (
            <div key={slide.id} className="low-hero-card">
              <div className="low-hero-icon">
                {slide.id === 1 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                )}
                {slide.id === 2 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                )}
                {slide.id === 3 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                )}
                {slide.id === 4 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                )}
              </div>
              <div className="low-hero-content">
                <h3 className="low-hero-title">{slide.title}</h3>
                <p className="low-hero-description">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
