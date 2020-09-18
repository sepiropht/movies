import React, { useState } from "react";

interface SetPaginationProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SetPaginationRadio: React.FC<SetPaginationProps> = ({
  handleChange,
}) => {
  const [value, setRadio] = useState("4");
  return (
    <>
      <form>
        <input
          type="radio"
          value="4"
          id="first"
          checked={value === "4"}
          onChange={handleChange}
          onClick={() => setRadio("4")}
          name="pagination"
        />
        <label htmlFor="first">4 éléments par page</label>

        <input
          type="radio"
          value="8"
          checked={value === "8"}
          id="two"
          onChange={handleChange}
          onClick={() => setRadio("8")}
          name="pagination"
        />
        <label htmlFor="two">8 éléments par page</label>
        <input
          type="radio"
          value="12"
          checked={value === "12"}
          id="default"
          onChange={handleChange}
          onClick={() => setRadio("12")}
          name="pagination"
        />
        <label htmlFor="default">12 éléments par page</label>
      </form>{" "}
    </>
  );
};
