import { Button } from "@mui/material";
import StyledButton from "./components/button/StyledButton";
import Routes from "./router/Router";

import styled from "@emotion/styled";

const StyledButtonn = styled.button`
  background-color:teal;
  color: #fff;
  width: 250px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 1.2rem;

`;
const App = () => {
  return (
    <>
      {/* <StyledButton
        backgroundColor={"green"}
        title={"click me"}
        onClick={console.log("Clicked")}
      />
      <StyledButton
        backgroundColor={"yellow"}
        title={"Submit"}
        onClick={handleSubmit}
      />
      <Routes /> */}

      <StyledButtonn>Click</StyledButtonn>
    </>
  );
};
export default App;
