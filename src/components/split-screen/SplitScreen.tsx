import type { FC } from "react";
import { Container, Panel } from "./styles";

interface SplitScreenProps {
  children: [React.ReactNode, React.ReactNode];
  leftWidth: number;
  rightWidth: number;
}

const SplitScreen: FC<SplitScreenProps> = ({
  children,
  leftWidth,
  rightWidth,
}) => {
  const [left, right] = children;

  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
