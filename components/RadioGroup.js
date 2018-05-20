import { Form, Radio } from 'semantic-ui-react';

export default class RadioGroup extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  handleChange = (e, { value }) => {
    const { handleSelection, question } = this.props;
    if (this.state.value) {
      return;
    } else {
      this.setState({ value: value.id });
      handleSelection(value.is_correct, question);
    }
  };

  render() {
    return (
      <Form>
        {this.props.answers.map(answer => (
          <Form.Field key={answer.id}>
            <Radio
              label={answer.a_english}
              id={answer.id}
              value={answer}
              checked={this.state.value === answer.id}
              onChange={this.handleChange}
            />
          </Form.Field>
        ))}
      </Form>
    );
  }
}
