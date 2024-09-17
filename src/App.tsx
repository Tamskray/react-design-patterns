import { FC } from "react";
import SplitScreen from "./components/split-screen/SplitScreen";

interface SideProps {
  title: string;
}

const LeftSideComp: FC<SideProps> = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp: FC<SideProps> = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={1}>
        <LeftSideComp title="Left" />
        <RightSideComp title={"Right"} />
      </SplitScreen>
    </>
  );
}

export default App;
