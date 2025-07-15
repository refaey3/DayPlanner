import Head from "../component/Head";
import TaskContainer from "../component/TaskContainer";
import styled from "styled-components";
const Container = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
`;
export default function Home() {
  return (
    <Container>
      <TaskContainer />
    </Container>
  );
}
