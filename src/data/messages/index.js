import en from './en';
import pt from './pt';
import fr from './fr';
import es from './es';

const getMessages = (langKey) => {
  switch (langKey) {
    case 'en': return en;
    case 'pt': return pt;
    case 'fr': return fr;
    case 'es': return es;
    default: return en;
  }
};

module.exports = {
  getMessages
};
