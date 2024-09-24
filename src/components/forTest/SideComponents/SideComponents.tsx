import { FC } from "react";

interface SideProps {
  title: string;
}

export const LeftSideComp: FC<SideProps> = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

export const RightSideComp: FC<SideProps> = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};
