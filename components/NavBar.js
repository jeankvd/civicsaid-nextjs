import React from 'react';
import styled from 'styled-components';
import withLanguage from './withLanguage';

const Wrapper = styled.div`
  grid-template-area: sidebar;
  background-color: #464655;
  transition: all 0.3s ease-in;
  margin-top: 0.5em;
  width: 15em;
  height: 100%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    border-bottom: 1px solid #575766;
  }

  .link,
  .language-link {
    color: #2f94f1;
    display: block;
    padding: 2em 1.5em 2em 1.5em;
    text-transform: uppercase;
    cursor: pointer;
  }

  .link:hover,
  .link:focus {
    background: #e4b363;
    color: #464655;
  }

  .language-link:hover,
  .language-link:focus {
    background: #f1582fe6;
    color: #fff;
  }

  @media (max-width: 734px) {
    width: 10em;
    transition: all 0.3s ease-in;
  }
`;

const SubHeader = styled.div`
  color: #f1582fe6;
  font-size: 1.2em;
  font-weight: heavy;
  padding: 0.5em 1em 0.5em 1em;
  border-bottom: 1px solid #575766;
`;

const NavBar = ({ selectLanguage }) => (
  <Wrapper>
    <ul>
      <li>
        <div className="link">All Questions</div>
      </li>
      <li>
        <SubHeader>Categories</SubHeader>
        <div className="link">American Government</div>
      </li>
      <li>
        <div className="link">American History</div>
      </li>
      <li>
        <div className="link">Integrated Civics</div>
      </li>
      <li>
        <SubHeader>Language</SubHeader>
        <div
          className="language-link"
          onClick={() => selectLanguage('english')}
        >
          English
        </div>
      </li>
      <li>
        <div
          className="language-link"
          onClick={() => selectLanguage('spanish')}
        >
          Spanish
        </div>
      </li>
      <li>
        <div
          className="language-link"
          onClick={() => selectLanguage('chinese')}
        >
          Chinese
        </div>
      </li>
    </ul>
  </Wrapper>
);

export default withLanguage(NavBar);
