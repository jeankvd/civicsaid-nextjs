import styled from 'styled-components';

const Wrapper = styled.div`
  grid-template-area: sidebar;
  background-color: #464655;
  transition: all 0.3s ease-in;
  margin-top: 0.5em;
  width: 15em;
  height: 100vh;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    border-bottom: 1px solid #575766;
  }

  .link {
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

const SiderBar = () => (
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
    </ul>
  </Wrapper>
);

export default SiderBar;
