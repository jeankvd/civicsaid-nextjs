import Layout from '../components/Layout';
import SideBar from '../components/SideBar';
import Card from '../components/Card';
import { Content, CardText } from './questions';
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';
import withData from '../apollo/withData';
import withLanguage from '../components/withLanguage';
import Link from 'next/link';
import styled from 'styled-components';

const QuestionCard = ({ question, language }) => (
  <Card category={`${question.category}: ${question.subcategory}`}>
    <CardText>
      {language === 'english'
        ? question.q_english
        : language === 'spanish'
          ? question.q_spanish
          : question.q_chinese}
    </CardText>
  </Card>
);

const QuestionConsumer = withLanguage(QuestionCard);

const AnswerCard = ({ answers, category, subcategory, language }) => (
  <Card category={`${category}: ${subcategory}`}>
    <CardText>
      {answers.map((answer, i) => (
        <div key={i}>
          <li>
            {language === 'english'
              ? answer.a_english
              : language === 'spanish'
                ? answer.a_spanish
                : answer.a_chinese}
          </li>
        </div>
      ))}
    </CardText>
  </Card>
);

const AnswerConsumer = withLanguage(AnswerCard);

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
          <SideBar />
          <Content>
            <QuestionConsumer question={question} />
            <AnswerConsumer
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
