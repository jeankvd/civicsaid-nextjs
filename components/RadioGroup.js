import { Form, Radio } from 'semantic-ui-react';

export default class RadioGroup extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  handleChange = (e, { value }) => {
    if (this.state.value) {
      return;
    } else {
      this.setState({ value: value.id });
      this.props.handleSelection(value.is_correct, value.a_english);
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
              // disabled
            />
          </Form.Field>
        ))}
      </Form>
    );
  }
}
