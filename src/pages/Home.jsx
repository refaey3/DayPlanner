import Head from "../component/Head";
import InfoProg from "../component/InfoProg";
import TaskContainer from "../component/TaskContainer";
import styled from "styled-components";
const Container = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export default function Home() {
  
  return (
    <Container>
      <TaskContainer />
      <InfoProg />
    </Container>
  );
}
