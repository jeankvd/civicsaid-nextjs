import Layout from '../components/Layout';
import SideBar from '../components/SideBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-template-area: content;
`;

export default () => (
  <Layout>
    <SideBar />
    <p>Questions here</p>
  </Layout>
);
