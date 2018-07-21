import Card from '../components/Card';
import { CardText } from '../pages/questions';
import withLanguage from '../components/withLanguage';
import styled from 'styled-components';

const InputCard = styled.div`
  padding: 50px;
`

const UnrotatedCard = styled.div`
  backface-visibility: hidden;
`

const RotatedCard = styled.div`
  border: solid 5px  ${props => props.correct ? 'green' : 'red'};
  z-index: 100;
  transform: rotateX(180deg);
  backface-visibility: hidden;
`

const FlipCard = styled.div`
  margin-top: 25px;
  transform-style: preserve-3D;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotateX(${props => props.flipped ? '180deg' : '0deg'});
`

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

class InputAnswerCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        guess: ""
      }
    }
  
    handleOnChange = (e) => {
      this.setState({
        guess: e.target.value
      })
    }
  
    render() {
      return (
      <Card category={`${this.props.category}: ${this.props.subcategory}`}>
        <InputCard>
            <input type="text" name="" id="" onChange={this.handleOnChange} value={this.state.guess} />
            <button onClick={(e) => this.props.handleOnClick(this.state.guess, e)} type="submit">Check Your Answer!</button>
        </InputCard>
      </Card>
      )
    }
}
  
const AnswerCard = ({ answers, category, subcategory, language, ...props }) => (
<Card category={`${category}: ${subcategory}`} onClick={props.handleOnClick}>
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


class QuestionAnswerCard extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    flipped: false,
    correct: false
    }
}

handleOnClick = () => {
    this.setState({
    flipped: !this.state.flipped
    });
}

handleAnswerCheck = (guess) => {
    guess.toLowerCase() == this.props.question.answers[0]["a_english"].toLowerCase() 
    ? this.setState({correct: true}) 
    : this.setState({ correct: false });

    this.setState({
        flipped: !this.state.flipped
    });
}

render() {
    return (
    <div>
        <QuestionConsumer question={this.props.question} />

        <FlipCard flipped={this.state.flipped}>

        <UnrotatedCard >
            <InputAnswerCard handleOnClick={this.handleAnswerCheck}
            answers={this.props.question.answers}
            category={this.props.question.category}
            subcategory={this.props.question.subcategory} />
        </UnrotatedCard>

        <RotatedCard onClick={this.handleOnClick} correct={this.state.correct}>
            <AnswerConsumer
                answers={this.props.question.answers}
                category={this.props.question.category}
                subcategory={this.props.question.subcategory}
            />
        </RotatedCard>
        
        </FlipCard>
    
    </div>
    )
}
}
  
  export default QuestionAnswerCard;