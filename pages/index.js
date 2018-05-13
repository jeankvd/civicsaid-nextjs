import Header from '../components/Header';
import Layout from '../components/Layout';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import take from 'lodash/take';
import shuffle from 'lodash/shuffle';
import Slider from 'react-slick';
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

const HorizontalLine = styled.hr`
  width: 95%;
`;

const QuizTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const settings = {
  dots: true,
};

const randomTen = collection => take(shuffle(collection), 10);

const QuizList = ({ questions }) => (
  <Slider {...settings}>
    {randomTen(questions).map((question, index) => (
      <div key={question.id}>
        <h3>{question.q_english}</h3>
      </div>
    ))}
  </Slider>
);

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
                <QuizTitle>
                  <h2>Civics Quiz</h2>
                </QuizTitle>
                <HorizontalLine />
                <QuizList questions={data.quizQuestions} />
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
