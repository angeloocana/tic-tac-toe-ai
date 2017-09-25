const languages = require('./languages');

module.exports = {
  siteUrl: 'https://tic-tac-toe-ai.surge.sh',
  author: {
    name: 'Ângelo Ocanã',
    homeCity: 'Ottawa',
    email: 'angeloocana@gmail.com',
    defaultLink: 'https://angeloocana.com'
  },
  sourceCodeLink: 'https://github.com/angeloocana/tic-tac-toe-ai',
  menu: [
    {label: 'home', slug: '/'},
    {label: 'author', link: 'https://angeloocana.com'},
    {label: 'sourceCode', link: 'https://github.com/angeloocana/tic-tac-toe-ai'}
  ],  
  languages
};
