import Header from '../components/Header';
import Layout from '../components/Layout';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../apollo/withData';
import styled from 'styled-components';

const Quiz = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5em;
  width: 90%;
  height: auto;
  background-color: #fff;
  -webkit-box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
`;

const QuizBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Index extends React.Component {
  render() {
    return (
      <Query query={QUIZ_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;
          return (
            <div>
              <Header />
              <Quiz>
                <QuizBody>
                  <h2>Civics Quiz</h2>
                </QuizBody>
              </Quiz>
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
      q_english
      quiz_answers {
        a_english
        is_correct
      }
    }
  }
`;

export default withData(Index);
