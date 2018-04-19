import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import { Content, CardText } from './questions';
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';
import withData from '../apollo/withData';
import Link from 'next/link';
import styled from 'styled-components';

const QuestionCard = ({ question }) => (
  <Card category={`${question.category}: ${question.subcategory}`}>
    <CardText>{question.q_english}</CardText>
  </Card>
);

const AnswerCard = ({ answers, category, subcategory }) => {
  console.warn(`answer props -> ${JSON.stringify(answers, null, 2)}`);
  return (
    <Card category={`${category}: ${subcategory}`}>
      <CardText>
        {answers.map((answer, i) => (
          <div key={i}>
            <li>{answer.a_english}</li>
          </div>
        ))}
      </CardText>
    </Card>
  );
};

const FlashCard = ({
  url: {
    query: { qid },
  },
}) => (
  <Query query={QUESTIONS_QUERY} variables={{ qid }}>
    {({ loading, error, data: { question } }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      return (
        <Layout>
          <NavBar />
          <Content>
            <QuestionCard question={question} />
            <AnswerCard
              answers={question.answers}
              category={question.category}
              subcategory={question.subcategory}
            />
          </Content>
        </Layout>
      );
    }}
  </Query>
);

const QUESTIONS_QUERY = gql`
  query question($qid: ID) {
    question(where: { id: $qid }) {
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

export default withData(FlashCard);
