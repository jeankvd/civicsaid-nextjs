import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  background-color: #fff;
  margin-top: 1.5em;
  -webkit-box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
`;

const Category = styled.div`
  background-color: #464655;
  color: #f1582fe6;
  font-size: 1.2em;
  font-weight: heavy;
  padding: 0.5em 1em 0.5em 1em;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default props => (
  <Wrapper>
    <Category>{props.category}</Category>
    <Container>{props.children}</Container>
  </Wrapper>
);
