import Slider from 'react-slick';
import RadioGroup from './RadioGroup';
import { Radio } from 'semantic-ui-react';
import styled from 'styled-components';

const QuizContainer = styled.div`
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

export default class Quiz extends React.Component {
  constructor(props) {
    super();
    this.state = {
      amountCorrect: 0,
      answeredWrong: [],
      restartQuiz: false,
    };
  }

  handleSelection = (is_correct, answer) => {
    if (is_correct) {
      this.setState({ amountCorrect: this.state.amountCorrect + 1 });
    } else {
      this.setState(prevState => ({
        answeredWrong: [...prevState.answeredWrong, answer],
      }));
    }
  };

  render() {
    const { questions } = this.props;
    const settings = {
      dots: true,
      infinite: false,
    };
    return (
      <QuizContainer>
        <QuizTitle>
          <h2>Civics Quiz</h2>
        </QuizTitle>
        <HorizontalLine />
        <Slider {...settings}>
          {questions.map(question => (
            <div key={question.id}>
              <h3>{question.q_english}</h3>
              <HorizontalLine />
              <RadioGroup
                answers={question.quiz_answers}
                handleSelection={this.handleSelection}
              />
            </div>
          ))}
        </Slider>
      </QuizContainer>
    );
  }
}
