"use client";
import { Fragment } from "react";
import Step from "./Step";
import { useStepsStore } from "@/store/useStepsStore";
import { DotsIcon } from "@/icons";

const ProgressTracker = () => {
  const { steps } = useStepsStore();

  return (
    <div className="progressTracker">
      {steps.map((step, index) => (
        <Fragment key={step.number}>
          <Step
            number={step.number}
            label={step.label}
            active={step.active}
            completed={step.completed}
          />

          {index < steps.length - 1 && <DotsIcon />}
        </Fragment>
      ))}
    </div>
  );
};

export default ProgressTracker;
