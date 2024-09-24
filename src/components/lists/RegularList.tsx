import type { ComponentType, FC } from "react";

interface RegularListProps<T> {
  items: T[];
  sourceName: string;
  ItemComponent: ComponentType<{ [key: string]: T }>;
}

const RegularList: FC<RegularListProps<any>> = ({
  items,
  sourceName,
  ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
