import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import { Wrapper, Question } from './questions';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withData from '../apollo/withData';
import styled from 'styled-components';

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

const QuestionCard = ({ question }) => (
  <Card
    category={`${question.category}: ${question.subcategory}`}
    key={question.id}
  >
    <Question>{question.q_english}</Question>
  </Card>
);

const FlashCard = ({ data: { question, answers } }) => (
  <Layout>
    <NavBar />
    <Wrapper>
      <QuestionCard question={question} />
      <AnswerCard answers={answers} />
    </Wrapper>
  </Layout>
);

const EnhancedFlashCard = graphql(query)(FlashCard);

export default withData(EnhancedFlashCard);