import styled from "styled-components";
import { GlobalStyles } from "./components/globalStyles";

import Card from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Card />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  height: 100vh;
  weight: 100vw;
  display: flex;
  place-content: center;
  place-items: center;
`;
