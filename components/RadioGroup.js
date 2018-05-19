import { Form, Radio } from 'semantic-ui-react';

export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form>
        {this.props.answers.map(answer => (
          <Form.Field>
            <Radio
              label={answer.a_english}
              name="radioGroup"
              value={answer.id}
              checked={this.state.value === answer.id}
              onChange={this.handleChange}
            />
          </Form.Field>
        ))}
      </Form>
    );
  }
}
