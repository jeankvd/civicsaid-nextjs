import React from 'react';
import { Consumer } from './LanguageContext';

export default function withLanguage(BaseComponent) {
  return function LanguageComponent(props) {
    return (
      <Consumer>
        {context => (
          <BaseComponent
            {...props}
            language={context.language}
            selectLanguage={context.selectLanguage}
          />
        )}
      </Consumer>
    );
  };
}
