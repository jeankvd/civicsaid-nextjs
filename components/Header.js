import Link from 'next/link';
import PropTypes from 'prop-types';
import { compose, withHandlers, withState } from 'recompose';
import styled from 'styled-components';

const HeaderNav = styled.header`
  background: #fff;
  color: #2f94f1;
  padding: 2em 0;
  line-height: 4px;
  position: relative;
  -webkit-box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  &:hover {
    content: '';
    clear: both;
    display: block;
  }
`;

const Container = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Logo = styled.div`
  float: left;
  font-size: 1.3rem;
  line-height: 4px;
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;

  span {
    font-weight: 400;
  }
`;

const SiteNav = styled.nav`
  position: absolute;
  top: 100%;
  right: 0%;
  background: #464655;
  clip-path: ${props =>
    props.clicked ? 'circle(250% at top right)' : 'circle(0px at top right)'};
  transition: clip-path ease-in-out 700ms;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    border-bottom: 1px solid #575766;
  }

  a {
    color: #2f94f1;
    display: block;
    padding: 2em 4em 2em 1.5em;
    text-transform: uppercase;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    background: #e4b363;
    color: #464655;
  }

  @media (min-width: 734px) {
    height: auto;
    position: relative;
    background: transparent;
    float: right;
    clip-path: initial;

    li {
      display: inline-block;
      border: none;
    }

    a {
      padding: 0;
      margin-left: 3em;
    }

    a:hover,
    a:focus {
      background: transparent;
    }
  }
`;

const MenuToggle = styled.div`
  padding: 1.5em;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  cursor: pointer;
`;

const Hamburger = styled.div`
  @media (max-width: 733px) {
    &:before,
    &:after {
      content: '';
      display: block;
      background: #2f94f1;
      height: 3px;
      width: 1.75em;
      border-radius: 3px;
      transition: all ease-in-out 500ms;
      transform: ${props => (props.clicked ? 'rotate(45deg)' : '')};
    }

    content: '';
    display: block;
    background: #2f94f1;
    height: 3px;
    width: 1.75em;
    border-radius: 3px;
    transition: all ease-in-out 500ms;
    transform: ${props => (props.clicked ? 'rotate(45deg)' : '')};

    &:before {
      transform: translateY(-6px);
      opacity: ${props => (props.clicked ? '0' : '')};
    }

    &:after {
      transform: ${props =>
        props.clicked ? 'translateY(-3px) rotate(-90deg)' : 'translateY(3px)'};
    }
  }
`;

const Header = ({ selected, dropDownSelected, handleMenuClick }) => (
  <HeaderNav>
    <Container>
      <Logo>
        CIVICS<span>AID</span>
      </Logo>

      <SiteNav clicked={selected}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/questions">Questions</a>
          </li>
          <li>
            <a href="/vocabulary">Vocabulary</a>
          </li>
          <li>
            <a href="/info">Local Info</a>
          </li>
        </ul>
      </SiteNav>

      <MenuToggle onClick={handleMenuClick}>
        <Hamburger clicked={selected} />
      </MenuToggle>
    </Container>
  </HeaderNav>
);

Header.propTypes = {
  handleMenuClick: PropTypes.func,
  selected: PropTypes.bool,
};

const enhancedHeader = compose(
  withState('selected', 'setSelected', false),
  withHandlers({
    handleMenuClick: ({ selected, setSelected }) => () => {
      setSelected(!selected);
    },
  }),
)(Header);

export default enhancedHeader;
