import React, { useState } from "react";
interface CategoryProps {
  category: string;
  onCategoryClick: (cat: string) => void;
}

export const Category: React.FC<CategoryProps> = ({
  category,
  onCategoryClick,
}) => {
  const [selected, toogleSelected] = useState<boolean>(false);
  return (
    <span
      onClick={() => {
        toogleSelected(!selected);
        onCategoryClick(category);
      }}
    >
      {category}
    </span>
  );
};
