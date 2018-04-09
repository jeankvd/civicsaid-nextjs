import Header from './Header';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 'sidebar' 'content';
`;

const Layout = props => (
  <div>
    <Header />
    <Grid>{props.children}</Grid>
  </div>
);

export default Layout;
