import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withData from '../apollo/withData';
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-template-area: content;
`;

export const Question = styled.div`
  color: #2f94f1;
  font-size: 1.2em;
  font-weight: heavy;
  padding: 40px 15px 40px;
  cursor: pointer;
`;

const query = gql`
  {
    questions {
      id
      q_english
      q_spanish
      q_chinese
      category
      subcategory
    }
  }
`;

const QuestionList = ({ questions }) =>
  questions.map(question => (
    <Card
      category={`${question.category}: ${question.subcategory}`}
      key={question.id}
    >
      <Question>{question.q_english}</Question>
    </Card>
  ));

const Questions = ({ data: { questions } }) => (
  <Layout>
    <NavBar />
    <Wrapper>
      <QuestionList questions={questions} />
    </Wrapper>
  </Layout>
);

const EnhancedQuestions = graphql(query)(Questions);

export default withData(EnhancedQuestions);
