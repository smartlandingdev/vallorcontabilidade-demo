import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contato">
      {/* Seção de contato/CTA */}
      <div className="footer-cta">
        <div className="footer-cta-container">
          <div className="footer-cta-content">
            <h2>Pronto para otimizar a gestão contábil da sua empresa?</h2>
            <p>Agende uma consultoria e descubra como podemos ajudar seu negócio a crescer</p>
          </div>
          <div className="footer-cta-buttons">
            <button className="btn btn-primary">Agendar Consulta</button>
            <button className="btn btn-outline">Solicitar Proposta</button>
          </div>
        </div>
      </div>

      {/* Conteúdo principal do footer */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Coluna 1 - Logo e descrição */}
          <div className="footer-column footer-brand">
            <img src={logo} alt="Vallor Contabilidade" className="footer-logo" />
            <p className="footer-description">
              Soluções estratégicas em contabilidade e consultoria empresarial
              desde 2009.
            </p>
            {/* Redes sociais */}
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Serviços */}
          <div className="footer-column">
            <h3 className="footer-column-title">Serviços</h3>
            <ul className="footer-links">
              <li><a href="#servicos">Contabilidade Empresarial</a></li>
              <li><a href="#servicos">Abertura de Empresas</a></li>
              <li><a href="#servicos">Planejamento Tributário</a></li>
              <li><a href="#servicos">Assessoria Financeira</a></li>
              <li><a href="#servicos">Compliance Fiscal</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Empresa */}
          <div className="footer-column">
            <h3 className="footer-column-title">Empresa</h3>
            <ul className="footer-links">
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#servicos">Nossos Serviços</a></li>
              <li><a href="#contato">Blog</a></li>
              <li><a href="#contato">Cases de Sucesso</a></li>
              <li><a href="#contato">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="footer-column">
            <h3 className="footer-column-title">Contato</h3>
            <ul className="footer-contact">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:contato@vallorcontabil.com.br">contato@vallorcontabil.com.br</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="footer-copyright">
            © {currentYear} Vallor Contabilidade. Todos os direitos reservados.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Política de Privacidade</a>
            <span>•</span>
            <a href="#terms">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
