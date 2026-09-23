(() => {
  'use strict';
  const grid = document.getElementById('project-grid');
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const placeholders = [
    { category: 'Python', title: 'Exploração de dados', description: 'Espaço reservado para análises, tratamento de dados e notebooks em Python.', mark: 'Py' },
    { category: 'SQL', title: 'Consultas e análises', description: 'Espaço reservado para consultas, modelagem e investigação de bases de dados.', mark: 'SQL' },
    { category: 'Power BI', title: 'Dashboards e indicadores', description: 'Espaço reservado para relatórios interativos e visualização de indicadores.', mark: 'BI' }
  ];
  function element(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }
  if (projects.length) {
    document.getElementById('project-title').textContent = 'Projetos em destaque.';
    document.querySelector('.section-head > p').textContent = 'Perguntas, processos e resultados de cada análise.';
    document.querySelector('#sobre .muted').textContent = 'Novos estudos serão adicionados à medida que forem desenvolvidos.';
  }
  for (const item of projects.length ? projects : placeholders) {
    const card = element('article', 'card');
    const top = element('div', 'card-top');
    top.append(element('span', 'code-mark', item.mark || item.category), element('span', 'status', projects.length ? (item.status || 'Publicado') : 'Em breve'));
    card.append(top, element('h3', '', item.title), element('p', '', item.description));
    const bottom = element('div', 'card-bottom');
    for (const link of item.links || []) {
      try {
        const url = new URL(link.url);
        if (!['https:', 'http:'].includes(url.protocol)) continue;
        const anchor = element('a', '', link.label || 'Ver projeto');
        anchor.href = url.href;
        bottom.append(anchor);
      } catch { /* Ignora endereços inválidos. */ }
    }
    if (!bottom.childNodes.length) bottom.textContent = projects.length ? item.category : item.category + ' · Projeto ainda não publicado';
    card.append(bottom);
    grid.append(card);
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
