import React from "react";

interface SliderButtonProps {
  onPrevClicked: () => void;
  onNextClicked: () => void;
  paginationSize: number;
  currentStep: number;
  size: number;
}
export const SliderButtons: React.FC<SliderButtonProps> = ({
  onPrevClicked,
  onNextClicked,
  paginationSize,
  size,
  currentStep,
}) => {
  return (
    <div>
      <span onClick={onPrevClicked}>
        <i className="fas fa-step-backward"></i>
      </span>{" "}
      <span onClick={onNextClicked}>
        <i className="fas fa-step-forward"></i>
      </span>
      <span>
        {" "}
        {currentStep}/{Math.ceil(size / paginationSize)}
      </span>
    </div>
  );
};
