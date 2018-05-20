import Header from '../components/Header';
import Layout from '../components/Layout';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import take from 'lodash/take';
import shuffle from 'lodash/shuffle';
import withData from '../apollo/withData';
import Quiz from '../components/Quiz';

class Index extends React.Component {
  render() {
    const randomTen = collection => take(shuffle(collection), 10);
    return (
      <Query query={QUIZ_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;
          return (
            <div>
              <Header />
              <Quiz questions={randomTen(data.quizQuestions)} />
            </div>
          );
        }}
      </Query>
    );
  }
}

const QUIZ_QUERY = gql`
  {
    quizQuestions {
      id
      q_english
      quiz_answers {
        id
        a_english
        is_correct
      }
    }
  }
`;

export default withData(Index);
