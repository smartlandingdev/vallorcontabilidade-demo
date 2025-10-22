import React from 'react';
import './DigitalCertificate.css';
import logo from '../assets/logo.png';
import receitaLogo from '../assets/receita-federal.png';

const DigitalCertificate: React.FC = () => {
  return (
    <section className="digital-certificate" id="certificado-digital">
      <div className="certificate-container">
        {/* Visual à esquerda - Cartão e Pendrive */}
        <div className="certificate-visual">
          {/* Cartão de Certificado Digital */}
          <div className="certificate-card">
            {/* Topo do cartão - e-CPF e e-CNPJ */}
            <div className="card-header">
              <span className="cert-type">e-CPF</span>
              <span className="cert-type">e-CNPJ</span>
            </div>

            {/* Microchip */}
            <div className="card-chip">
              <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="40" height="30" rx="3" fill="#D4AF37" stroke="#B8960F" strokeWidth="1"/>
                <line x1="15" y1="5" x2="15" y2="35" stroke="#B8960F" strokeWidth="1"/>
                <line x1="25" y1="5" x2="25" y2="35" stroke="#B8960F" strokeWidth="1"/>
                <line x1="35" y1="5" x2="35" y2="35" stroke="#B8960F" strokeWidth="1"/>
                <line x1="5" y1="15" x2="45" y2="15" stroke="#B8960F" strokeWidth="1"/>
                <line x1="5" y1="25" x2="45" y2="25" stroke="#B8960F" strokeWidth="1"/>
              </svg>
            </div>

            {/* Logo Receita Federal */}
            <div className="federal-logo">
              <img src={receitaLogo} alt="Receita Federal" />
            </div>

            {/* Rodapé do cartão */}
            <div className="card-footer">
              <img src={logo} alt="Vallor" className="card-logo" />
              <span className="cert-text">Certificado Digital</span>
            </div>
          </div>

          {/* Pendrive flutuante */}
          <div className="usb-drive">
            <svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
              {/* Corpo do pendrive */}
              <rect x="20" y="40" width="40" height="70" rx="8" fill="url(#usbGradient)"/>
              <rect x="25" y="45" width="30" height="20" rx="3" fill="rgba(255,255,255,0.3)"/>

              {/* Conector USB */}
              <rect x="30" y="10" width="20" height="30" rx="2" fill="#A0A0A0"/>
              <rect x="33" y="15" width="6" height="20" fill="#FFD700"/>
              <rect x="41" y="15" width="6" height="20" fill="#FFD700"/>

              {/* Gradiente */}
              <defs>
                <linearGradient id="usbGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a5f"/>
                  <stop offset="100%" stopColor="#2d5a8f"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Conteúdo à direita */}
        <div className="certificate-content">
          <h2 className="certificate-title">Certificado Digital</h2>
          <p className="certificate-description">
            O Certificado Digital é a identidade eletrônica que permite a identificação segura e
            inequívoca do autor de uma mensagem ou transação em meios eletrônicos.
          </p>

          <div className="certificate-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Segurança e Autenticidade</h3>
                <p>Validade jurídica para documentos eletrônicos</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Agilidade</h3>
                <p>Assinatura de documentos de forma rápida e prática</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Criptografia</h3>
                <p>Proteção das suas informações e transações</p>
              </div>
            </div>
          </div>

          <div className="certificate-types">
            <h3 className="types-title">Tipos disponíveis:</h3>
            <ul className="types-list">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <strong>e-CPF:</strong> Para pessoa física
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <strong>e-CNPJ:</strong> Para pessoa jurídica
              </li>
            </ul>
          </div>

          <a href="#contato" className="certificate-cta">
            Solicite seu Certificado Digital
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalCertificate;
