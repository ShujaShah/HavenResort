import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Haven Resort</Heading>
        <Heading as="h2">Check in and Check out</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
};

export default App;
