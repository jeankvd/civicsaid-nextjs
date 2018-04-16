import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import { Wrapper, Question } from './questions';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import withData from '../apollo/withData';
import Link from 'next/link';
import styled from 'styled-components';

const query = gql`
  {
    question(where: { id: ${qid} }) {
      q_english
      q_spanish
      q_chinese
      category
      subcategory
      answers {
        a_english
        a_spanish
        a_chinese
      }
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

const FlashCard = ({
  data: { question, answers },
  url: {
    query: { qid },
  },
}) => {
  console.warn(`queryid -> ${JSON.stringify(qid, null, 2)}`);
  return (
    <Layout>
      <NavBar />
      <Wrapper>
        <QuestionCard question={question} />
        {/* <AnswerCard answers={answers} /> */}
      </Wrapper>
    </Layout>
  );
};

const EnhancedFlashCard = graphql(query, {
  options: ({
    url: {
      query: { qid },
    },
  }) => ({ variables: { qid } }),
})(FlashCard);

export default withData(EnhancedFlashCard);
