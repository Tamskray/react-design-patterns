import type { FC } from "react";
import { Author } from "./types";

interface SmallAuthorListItemsProps {
  author: Author;
}

const SmallAuthorListItems: FC<SmallAuthorListItemsProps> = ({ author }) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default SmallAuthorListItems;
