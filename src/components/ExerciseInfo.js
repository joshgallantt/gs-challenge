import React from "react";
import "./css/ExerciseInfo.css";

const ExerciseInfo = (props) => {
  return (
    <div className="exercise-container">
      <h1 className="exercise-info-title">{props.selectedExercise.name}</h1>
      <div className="exercise-info">
        <div className="exercise-container-left">
          <img
            alt={props.selectedExercise.name}
            className="exercise-info-photo"
            src={
              props.gender === "male"
                ? props.selectedExercise.male.image
                : props.selectedExercise.female.image
            }
          ></img>
        </div>
        <div className="exercise-container-right">
          <h3 className="exercise-info-instructions-title">Instructions</h3>
          <div
            className="exercise-info-instructions-description"
            dangerouslySetInnerHTML={{
              __html: props.selectedExercise.transcript,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseInfo;
