import Slider from 'react-slick';
import RadioGroup from './RadioGroup';
import { Radio, Button, Header, Icon, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Quiz extends React.Component {
  constructor(props) {
    super();
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      amountCorrect: 0,
      answeredWrong: [],
      totalAnswered: 0,
      modalOpen: false,
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleSelection = (is_correct, answer) => {
    if (is_correct) {
      this.setState({ amountCorrect: this.state.amountCorrect + 1 });
      this.setState({ totalAnswered: this.state.totalAnswered + 1 });
    } else {
      this.setState(prevState => ({
        answeredWrong: [...prevState.answeredWrong, answer],
      }));
      this.setState({ totalAnswered: this.state.totalAnswered + 1 });
    }
  };

  render() {
    const { questions } = this.props;
    const {
      totalAnswered,
      amountCorrect,
      answeredWrong,
      modalOpen,
    } = this.state;
    const settings = {
      dots: true,
      infinite: false,
    };
    return (
      <React.Fragment>
        <Container>
          <Title>
            <h2>Civics Quiz</h2>
          </Title>
          <HorizontalLine />
          <Slider {...settings}>
            {questions.map(question => (
              <div key={question.id}>
                <h3>{question.q_english}</h3>
                <HorizontalLine />
                <RadioGroup
                  answers={question.quiz_answers}
                  handleSelection={this.handleSelection}
                  question={question.q_english}
                />
              </div>
            ))}
            {totalAnswered === 10 && (
              <Results
                totalAnswered={totalAnswered}
                amountCorrect={amountCorrect}
                answeredWrong={answeredWrong}
                modalOpen={modalOpen}
                handleClose={this.handleClose}
                handleOpen={this.handleOpen}
              />
            )}
          </Slider>
        </Container>
      </React.Fragment>
    );
  }
}

const Results = ({
  totalAnswered,
  amountCorrect,
  answeredWrong,
  modalOpen,
  handleClose,
  handleOpen,
}) => (
  <React.Fragment>
    <h3>Results</h3>
    {amountCorrect >= 6 && <h4>🎉 Passed</h4>}
    {amountCorrect < 6 && <h4>❌ Failed</h4>}
    <p>
      The naturalization exam requires you get at least 6 out of 10 correct. But
      remember, <strong>the exam is not multiple choice.</strong>
    </p>
    {amountCorrect < 10 && (
      <Button onClick={handleOpen}>
        <Icon name="list ul" /> View Results
      </Button>
    )}
    <Button onClick={() => window.location.reload()}>
      <Icon name="refresh" /> Restart Quiz
    </Button>
    <Modal open={modalOpen} onClose={handleClose} basic size="small">
      <Header icon="pointing right" content="Results" />
      <Modal.Content>
        <h2>Score: {amountCorrect}0%</h2>
        <h3>Questions you missed:</h3>
        <ul>
          {answeredWrong.map(question => (
            <li key={question}>
              <p>{question}</p>
            </li>
          ))}
        </ul>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={handleClose} inverted>
          <Icon name="checkmark" /> Got it
        </Button>
      </Modal.Actions>
    </Modal>
  </React.Fragment>
);
