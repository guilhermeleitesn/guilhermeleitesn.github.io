# Guilherme Leite — Portfólio de Análise de Dados

Site estático em português, responsivo, sem instalação de dependências. Abra `index.html` para visualizar. As fontes têm fallback local; não há formulários, rastreadores ou chaves de API.

## Adicionar projetos

Edite `projects.js`. O array começa vazio, e o site apresenta três espaços identificados como **Em breve**. Ao adicionar o primeiro projeto, os espaços reservados são substituídos pelos projetos reais.

```js
window.PORTFOLIO_PROJECTS = [
  {
    category: 'Python',
    mark: 'Py',
    title: 'Título do seu projeto',
    description: 'Descreva a pergunta, a base utilizada, o método e o principal resultado.',
    status: 'Publicado',
    links: [
      { label: 'Ver código', url: 'https://github.com/SEU-USUARIO/SEU-REPOSITORIO' }
    ]
  }
];
```

Use `SQL`, `Power BI` ou qualquer outra categoria. Cada projeto aceita vários links, como código, notebook, relatório e demonstração. Publique apenas dados e relatórios que possam ser expostos publicamente. Não inclua senhas nem bases confidenciais.

## Estrutura sugerida para cada projeto futuro

- Contexto e pergunta de negócio.
- Fonte dos dados e condições de uso.
- Preparação e metodologia.
- Análise e visualizações.
- Resultados e limitações.
- Como reproduzir e tecnologias utilizadas.

Os projetos podem ficar em repositórios próprios; este site reúne seus links. Para Power BI, pode-se usar um README com imagens e descrição, sem exigir um relatório público interativo.

## Personalizar

- `index.html`: apresentação, sobre e contato. O contato inicial leva ao perfil público do GitHub; email e LinkedIn podem ser adicionados depois.
- `styles.css`: cores, tipografia e layout.
- `projects.js`: conteúdo dos projetos.
- `app.js`: renderização dos cartões.

## Publicar no GitHub Pages

1. Crie o repositório público `guilhermeleitesn.github.io` na conta `guilhermeleitesn`.
2. Coloque os arquivos desta pasta na raiz do repositório, incluindo `.nojekyll`.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch **main**, pasta **/(root)** e salve.
4. Aguarde o deploy. Endereço esperado: https://guilhermeleitesn.github.io/ .

Se esse repositório já existir, preserve o conteúdo existente e revise as alterações antes de substituí-lo. O endereço acima só estará ativo depois da publicação.
