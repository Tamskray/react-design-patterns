import type { FC } from "react";
import { Author } from "./types";

interface LargeAuthorListItemsProps {
  author: Author;
}

const LargeAuthorListItems: FC<LargeAuthorListItemsProps> = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Counr: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

export default LargeAuthorListItems;
