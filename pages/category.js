import Layout from '../components/Layout';
import SideBar from '../components/SideBar';
import Card from '../components/Card';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, Query } from 'react-apollo';
import withData from '../apollo/withData';
import Link from 'next/link';
import { Content, CardText, QuestionsConsumer } from './questions';

const Category = ({
  url: {
    query: { category },
  },
}) => (
  <Query query={QESTION_CATEGORY_QUERY} variables={{ category }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <Layout>
          <SideBar />
          <Content>
            <QuestionsConsumer questions={data.questions} />
          </Content>
        </Layout>
      );
    }}
  </Query>
);

const QESTION_CATEGORY_QUERY = gql`
  query questions($category: String) {
    questions(where: { category: $category }) {
      q_english
      q_spanish
      q_chinese
      category
      subcategory
      id
    }
  }
`;

export default withData(Category);
