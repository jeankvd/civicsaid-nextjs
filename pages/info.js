import Layout from '../components/Layout';
import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

const Container = styled.div`
  display: flex;
`;

const Label = styled.h3`
  font-weight: 300;
  color: #fff;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Error = styled.div`
  font-weight: 300;
  color: hsl(33, 100%, 65%);
  visibility: ${props => (!props.out ? 'hidden' : 'visible')};
  animation: ${props => (!props.out ? fadeOut : fadeIn)} 0.3s linear;
  transition: visibility 0.3s linear;
`;

const SearchBtn = ({ errors }) => (
  <Button disabled={errors} style={{ 'margin-left': '10px' }}>
    Search
  </Button>
);

export default class LocalInfo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      zip: '',
    };
  }

  validate = zip => zip && zip.length !== 5;

  handleChange = event => this.setState({ zip: event.target.value });

  render() {
    const errors = this.validate(this.state.zip);
    const { zip } = this.state;
    return (
      <Layout>
        <Wrapper>
          <Label>Enter zipcode</Label>
          <Container>
            <Input
              type="number"
              placeholder="e.g. 32798"
              value={zip}
              onChange={e => this.handleChange(e)}
            />
            <SearchBtn errors={errors} />
          </Container>
          {errors && <Error out>zipcode must be 5 digits long</Error>}
        </Wrapper>
      </Layout>
    );
  }
}
