import Link from 'next/link';
import styled from 'styled-components';

const HeaderNav = styled.header`
  background: #e54b4b;
  color: #ebebd3;
  padding: 2em 0;
  position: relative;
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

const Logo = styled.h1`
  float: left;
  font-size: 1rem;
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
  // clip-path: circle(0px at top right);
  // transition: clip-path ease-in-out 700ms;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    border-bottom: 1px solid #575766;
  }

  a {
    color: #ebebd3;
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

  @media (min-width: 700px) {
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
  padding: 1em;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  cursor: pointer;
`;

const Hamburger = styled.div`
  content: '';
  display: block;
  background: #ebebd3;
  height: 3px;
  width: 1.75em;
  border-radius: 3px;
  transition: all ease-in-out 500ms;
`;

const Header = () => (
  <HeaderNav>
    <Container>
      <Logo>
        CIVICS<span>AID</span>
      </Logo>

      <SiteNav>
        <ul>
          <li>
            <a href="/">
              <i className="fa fa-home site-nav--icon" />Home
            </a>
          </li>
          <li>
            <a href="/about">
              <i className="fa fa-info site-nav--icon" />About
            </a>
          </li>
          <li>
            <a href="/questions">
              <i className="fa fa-pencil site-nav--icon" />Questions
            </a>
          </li>
          <li>
            <a href="/vocabulary">
              <i className="fa fa-usd site-nav--icon" />Vocabulary
            </a>
          </li>
          <li>
            <a href="/info">
              <i className="fa fa-envelope site-nav--icon" />Info
            </a>
          </li>
        </ul>
      </SiteNav>

      <MenuToggle>
        <Hamburger />
      </MenuToggle>
    </Container>
  </HeaderNav>
);

export default Header;
