import Header from './Header';
import styled from 'styled-components';
import { Provider } from './LanguageContext';

const Grid = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 'sidebar' 'content';
`;

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english',
      selectLanguage: value => this.setState({ language: `${value}` }),
    };
  }

  render() {
    return (
      <Provider value={this.state}>
        <div>
          <Header />
          <Grid>{this.props.children}</Grid>
        </div>
      </Provider>
    );
  }
}

export default Layout;
