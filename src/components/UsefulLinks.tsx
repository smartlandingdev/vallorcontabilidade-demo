import React from 'react';
import './UsefulLinks.css';

interface Link {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: JSX.Element;
}

const UsefulLinks: React.FC = () => {
  const links: Link[] = [
    {
      id: 1,
      title: 'Agenda de Obrigações',
      description: 'Confira as agendas de todos os estados brasileiros, federal e trabalhista.',
      url: 'https://sitecontabil.com.br/agendas_obrigacoes/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Formulários Diversos',
      description: 'Diversos formulários, Termo de Rescisão do Contrato de Trabalho e muito mais.',
      url: 'https://sitecontabil.com.br/formularios/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="18" x2="12" y2="12"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Índice de Finanças',
      description: 'Reajustes, crédito, custo do dinheiro, moedas estrangeiras e taxas.',
      url: 'https://economia.uol.com.br/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Certidões Negativas',
      description: 'Diversas certidões estaduais, da receita federal e de vários municípios do Brasil.',
      url: 'https://sitecontabil.com.br/certidoes_negativas',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="useful-links" id="links-uteis">
      <div className="useful-links-container">
        <div className="useful-links-header">
          <h2 className="useful-links-title">Links Úteis</h2>
          <p className="useful-links-intro">
            Acesse ferramentas e recursos essenciais para facilitar o dia a dia da sua empresa
          </p>
        </div>

        <div className="links-grid">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-icon">{link.icon}</div>
              <div className="link-content">
                <h3 className="link-title">{link.title}</h3>
                <p className="link-description">{link.description}</p>
              </div>
              <div className="link-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          ))}

          <a
            href="https://www.sitecontabil.com.br/links_uteis"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card link-card-featured"
          >
            <div className="link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="link-content">
              <h3 className="link-title">Ver Todos os Links Úteis</h3>
              <p className="link-description">Acesse nossa página completa com mais recursos e ferramentas</p>
            </div>
            <div className="link-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
