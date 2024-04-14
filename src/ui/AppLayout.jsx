import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header';

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem;
`;

const StyleAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const AppLayout = () => {
  return (
    <StyleAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyleAppLayout>
  );
};

export default AppLayout;
