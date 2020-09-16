import React from "react";

interface SetPaginationProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SetPaginationRadio: React.FC<SetPaginationProps> = ({
  handleChange,
}) => {
  return (
    <>
      <form>
        <input
          type="radio"
          value="12"
          id="default"
          onChange={handleChange}
          name="pagination"
        />
        <label htmlFor="default">12 éléments par page</label>
        <input
          type="radio"
          value="4"
          id="first"
          onChange={handleChange}
          name="pagination"
        />
        <label htmlFor="first">4 élément par page</label>

        <input
          type="radio"
          value="8"
          id="two"
          onChange={handleChange}
          name="pagination"
        />
        <label htmlFor="two">8 élément par page</label>
      </form>{" "}
    </>
  );
};
