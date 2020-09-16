import React from "react";

interface SliderButtonProps {
  onPrevClicked: () => void;
  onNextClicked: () => void;
}
export const SliderButtons: React.FC<SliderButtonProps> = ({
  onPrevClicked,
  onNextClicked,
}) => {
  return (
    <>
      <button onClick={onPrevClicked}>prev</button>{" "}
      <button onClick={onNextClicked}>next</button>
    </>
  );
};
