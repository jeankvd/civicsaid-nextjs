import Layout from '../components/Layout';
import withData from '../apollo/withData';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';

const Vocabulary = () => (
  <Query query={VOCABULARY_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      console.warn(`data -> ${JSON.stringify(data, null, 2)}`);
      return <Layout>hello friend</Layout>;
    }}
  </Query>
);

const VOCABULARY_QUERY = gql`
  {
    vocabularyPeoples {
      id
      people
    }
    vocabularyPlaceses {
      id
      place
    }
    vocabularyHolidayses {
      id
      holiday
    }
    vocabularyVerbses {
      id
      verb
    }
    vocabularyCivicses {
      id
      civic
    }
    vocabularyQuestionWordses {
      id
      question_word
    }
    vocabularyOtherContents {
      id
      other_content
    }
    vocabularyOtherFunctions {
      id
      other_function
    }
  }
`;

export default withData(Vocabulary);
