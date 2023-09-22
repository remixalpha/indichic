import React from "react";
import { formatDate, capitalize } from "../../utils/formatUtils";

const ExampleComponent = () => {
  const date = "2023-08-25T12:34:56.789Z";
  const formattedDate = formatDate(date);
  const capitalizedText = capitalize("hello world");

  return (
    <div>
      <p>Formatted Date: {formattedDate}</p>
      <p>Capitalized Text: {capitalizedText}</p>
    </div>
  );
};

export default ExampleComponent;
