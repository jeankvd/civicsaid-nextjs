import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-template-area: content;
`;

const Question = styled.div`
  color: #2f94f1;
  font-size: 1.2em;
  font-weight: heavy;
`;

export default () => (
  <Layout>
    <NavBar />
    <Card category="American Government">
      <Question>
        What do we call the first ten amendments to the Constitution?
      </Question>
    </Card>
  </Layout>
);
