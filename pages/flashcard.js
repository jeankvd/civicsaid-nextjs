import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import { Wrapper, Question } from './questions';
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';
import withData from '../apollo/withData';
import Link from 'next/link';
import styled from 'styled-components';

const QUESTION_QUERY = gql`
  {
    question(where: { id: $id }) {
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

// const QuestionCard = ({ questionId }) => (
//   <Query query={QUESTION_QUERY} variables={{ id: questionId }}>
//     {({ loading, error, data }) => {
//       if (loading) return null;
//       if (error) return `Error!: ${error}`;

//       return (
//         <Card
//           category={`${data.question.category}: ${data.question.subcategory}`}
//           key={data.question.id}
//         >
//           <Question>{data.question.q_english}</Question>
//         </Card>
//       );
//     }}
//   </Query>
// );

const FlashCard = ({
  // data: { question, answers },
  url: {
    query: { qid },
  },
}) => {
  console.warn(`queryid -> ${JSON.stringify(qid, null, 2)}`);
  return (
    <Layout>
      <NavBar />
      <Wrapper>
        <QuestionCard questionId={qid} />
        {/* <QuestionCard question={question} questionId={qid} /> */}
        {/* <AnswerCard answers={answers} /> */}
      </Wrapper>
    </Layout>
  );
};

const EnhancedFlashCard = graphql(query)(FlashCard);

export default withData(EnhancedFlashCard);
