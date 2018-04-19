import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';
import withData from '../apollo/withData';
import Link from 'next/link';
import styled from 'styled-components';

export const Content = styled.div`
  grid-template-area: content;
`;

export const CardText = styled.div`
  color: #2f94f1;
  font-size: 1.2em;
  font-weight: heavy;
  padding: 40px 15px 40px;
  cursor: pointer;
`;

const QuestionList = ({ questions }) =>
  questions.map((question, index) => (
    <Card
      category={`${question.category}: ${question.subcategory}`}
      key={question.id}
    >
      <Link
        as={`/flashcard/${index + 1}`}
        href={{ pathname: 'flashcard', query: { qid: `${question.id}` } }}
      >
        <CardText>{question.q_english}</CardText>
      </Link>
    </Card>
  ));

const Questions = () => (
  <Query query={QESTION_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <Layout>
          <NavBar />
          <Content>
            <QuestionList questions={data.questions} />
          </Content>
        </Layout>
      );
    }}
  </Query>
);

const QESTION_QUERY = gql`
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

export default withData(Questions);
