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
    <div>
      <span onClick={onPrevClicked}>
        <i className="fas fa-step-backward"></i>
      </span>{" "}
      <span onClick={onNextClicked}>
        <i className="fas fa-step-forward"></i>
      </span>
    </div>
  );
};
