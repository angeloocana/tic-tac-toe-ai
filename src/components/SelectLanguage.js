import React from 'react';
import PropTypes from 'prop-types';
import Br from './flags/Br';
import Ca from './flags/Ca';
import Fr from './flags/Fr';
import Es from './flags/Es';
import { InvisibleSpan } from '../components/Invisible';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';

const Nav = styled.nav`
  margin-right: ${({ theme }) => theme.scale(8)};
`;

const Ul = styled.ul`
`;

const Li = styled.li`
  display: inline-block;
  padding: ${props => props.theme.i18n.selectLanguage.li.padding};
  margin: ${props => props.theme.i18n.selectLanguage.li.margin};
  font-size: ${props => props.theme.i18n.selectLanguage.li.fontSize};
  cursor: pointer;
  border-radius: ${props => props.theme.i18n.selectLanguage.li.borderRadius};
  transition: 0.3s;
  background-color: ${props => props.selected
    ? props.theme.i18n.selectLanguage.li.selected.backgroundColor
    : `transparent`};

  &:hover{
    background-color: ${props => props.theme.i18n.selectLanguage.li.selected.backgroundColor};
    transition: 0.3s;
  }
`;

const getIcon = langKey => {
  switch (langKey) {
    case 'en': return <Ca />;
    case 'fr': return <Fr />;
    case 'pt': return <Br />;
    case 'es': return <Es />;
    default: return null;
  }
};

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link}>
      <Li selected={lang.selected}>
        {getIcon(lang.langKey)}
      </Li>
    </Link>
  );

  return (
    <Nav {...props}>
      <header>
        <FormattedMessage id="selectLanguage">
          {(txt) => (
            <InvisibleSpan>{txt}</InvisibleSpan>
          )}
        </FormattedMessage>
      </header>
      <Ul>
        {links}
      </Ul>
    </Nav>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
