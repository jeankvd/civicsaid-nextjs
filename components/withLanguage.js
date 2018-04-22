import React from 'react';
import { Consumer } from './LanguageContext';

export default function withLanguage(BaseComponent) {
  return function LanguageComponent(props) {
    return (
      <Consumer>
        {language => <BaseComponent {...props} language={language} />}
      </Consumer>
    );
  };
}
