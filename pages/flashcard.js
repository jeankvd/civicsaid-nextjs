import Layout from '../components/Layout';
import SideBar from '../components/SideBar';
import { Content, CardText } from './questions';
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';
import withData from '../apollo/withData';
import QuestionAnswerCard from '../components/QuestionAnswerCard';

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
            <QuestionAnswerCard question={question}/>
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
