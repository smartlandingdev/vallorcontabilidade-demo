import React from 'react';
import './Company.css';

const Company: React.FC = () => {
  return (
    <section className="company" id="empresa">
      <div className="company-container">
        {/* Texto à esquerda */}
        <div className="company-content">
          <h2 className="company-title">Sobre a Vallor Contabilidade</h2>

          <div className="company-text">
            <p>
              Atuando em <strong>Cascavel e Região</strong>, a VALLOR oferece serviços de contabilidade
              e assessoria em gestão empresarial através de profissionais experientes e altamente capacitados.
            </p>
            <p>
              Atuando com <strong>responsabilidade, ética e eficiência</strong>, aliados ao acompanhamento
              do avanço de novas tecnologias, buscamos atendê-lo com um diferencial de qualidade.
            </p>
          </div>

          <div className="company-values">
            <div className="company-value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>Visão</h3>
              <p>
                Sermos uma empresa de referência na prestação de serviços contábeis no Oeste do Paraná,
                destacando-se por um alto grau de eficiência e inovação.
              </p>
            </div>

            <div className="company-value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Nossa Missão</h3>
              <p>
                Atuar com responsabilidade e honestidade, proporcionando serviços que sejam relevantes
                para o desenvolvimento sócio-econômico de nossos clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Elemento visual à direita */}
        <div className="company-visual">
          {/* Centro - Hub principal */}
          <div className="visual-center">
            <div className="center-ring ring-1"></div>
            <div className="center-ring ring-2"></div>
            <div className="center-ring ring-3"></div>
            <div className="center-core">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20"></path>
                <circle cx="12" cy="12" r="9"></circle>
              </svg>
              <span>VALLOR</span>
            </div>
          </div>

          {/* Linhas de conexão */}
          <svg className="connection-lines" viewBox="0 0 600 600">
            <line className="conn-line line-1" x1="300" y1="300" x2="150" y2="100" />
            <line className="conn-line line-2" x1="300" y1="300" x2="450" y2="120" />
            <line className="conn-line line-3" x1="300" y1="300" x2="100" y2="350" />
            <line className="conn-line line-4" x1="300" y1="300" x2="480" y2="300" />
            <line className="conn-line line-5" x1="300" y1="300" x2="150" y2="480" />
            <line className="conn-line line-6" x1="300" y1="300" x2="450" y2="450" />
            <line className="conn-line line-7" x1="300" y1="300" x2="500" y2="180" />
            <line className="conn-line line-8" x1="300" y1="300" x2="80" y2="220" />
          </svg>

          {/* Elementos orbitantes */}
          <div className="floating-element element-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span>Finanças</span>
          </div>

          <div className="floating-element element-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <span>Impostos</span>
          </div>

          <div className="floating-element element-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <span>Crescimento</span>
          </div>

          <div className="floating-element element-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            <span>Gestão</span>
          </div>

          <div className="floating-element element-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>RH</span>
          </div>

          <div className="floating-element element-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Empresa</span>
          </div>

          <div className="floating-element element-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Prazos</span>
          </div>

          <div className="floating-element element-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V10"></path>
              <path d="M18 20V4"></path>
              <path d="M6 20v-4"></path>
            </svg>
            <span>Relatórios</span>
          </div>

          {/* Partículas decorativas */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>

          <div className="visual-background">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
