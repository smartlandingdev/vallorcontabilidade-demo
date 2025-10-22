import React, { useState } from 'react';
import './Services.css';

interface Service {
  id: number;
  title: string;
  description: string;
  details?: string[];
  icon: JSX.Element;
}

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: 'Área Societária/Constituição de Empresa',
      description: 'Abertura e encerramento de Empresas, Alterações contratuais, Parcelamento de débitos fiscais, Registro de capital estrangeiro.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Gestão Contábil e Tributária',
      description: 'Planejamento personalizado, ferramentas que facilitam o dia a dia e soluções que maximizam resultados.',
      details: [
        'Planejamento Tributário',
        'Diagnósticos Contábil e tributário',
        'Monitoramento Tributário',
        'Recuperação de Tributos',
        'Assessoria para Filiais',
        'Auditorias das obrigações acessórias',
        'Consultoria e Assessoria',
        'Reestruturação Contábil e Tributária',
        'BPO (Business Process Outsourcing)',
        'Compliance'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Holding e Planejamento Patrimonial',
      description: 'Holding é uma empresa que possui como atividade principal, a participação acionária majoritária em uma ou mais empresas.',
      details: [
        'Maior controle patrimonial',
        'Proteção patrimonial',
        'Planejamento sucessório e economia tributária'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Departamento Pessoal e Gestão Trabalhista',
      description: 'Manutenção e controles das rotinas trabalhistas, pagamentos de salários, férias, décimo terceiro. Apoio na gestão do capital humano, acompanhamento e revisão das práticas trabalhistas e previdenciárias.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Contabilidade Gerencial',
      description: 'Custos, Planejamento e Controles Orçamentários, Análise de Balanço com indicadores econômicos e financeiros.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      id: 6,
      title: 'Declarações e Certidões',
      description: 'Imposto de Renda Pessoa Física e Jurídica, Espólio, ITR, IRRF, Cálculos de Ganho de Capital. Requerimentos e retirada de Certidões junto aos órgãos públicos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      )
    },
    {
      id: 7,
      title: 'Administração de Condomínio',
      description: 'Constituição e regularização de condomínios residenciais e comerciais. Demonstrativos mensais, assessoria em recebimentos, pagamentos, cobranças e assembleias.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
    {
      id: 8,
      title: 'Autônomos',
      description: 'Consultoria e atendimento aos profissionais autônomos para elaboração do Livro Caixa, Carnê-Leão, folha de pagamento, acompanhamento de receitas e despesas para o Imposto de Renda.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      id: 9,
      title: 'Consultorias e Assessorias',
      description: 'Profissionais capacitados para assessoria na implantação de sistemas de informação, garantindo segurança e agilidade. Parceria com profissionais da área do Direito.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      )
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="services" id="servicos">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Conheça os serviços que oferecemos</h2>
          <p className="services-intro">
            A VALLOR Contabilidade e Assessoria Empresarial dispõe de um corpo técnico especializado
            pronto para atender Indústrias, Comércios, Prestação de Serviços, Condomínios, Pessoa Física,
            entre outros. Dentre os principais serviços, destacamos:
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${expandedId === service.id ? 'expanded' : ''}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              {service.details && (
                <>
                  <button
                    className="service-toggle"
                    onClick={() => toggleExpand(service.id)}
                  >
                    {expandedId === service.id ? 'Ver menos' : 'Ver detalhes'}
                    <svg
                      className={`toggle-icon ${expandedId === service.id ? 'rotated' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {expandedId === service.id && (
                    <ul className="service-details">
                      {service.details.map((detail, index) => (
                        <li key={index}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
