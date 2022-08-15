import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./css/ExerciseSearch.css";

const ExerciseSearch = (props) => {
  const [value] = useState("");

  const selectExerciseOptions = () => {
    return props.exercises.map((exercise) => ({
      name: exercise.name,
      value: exercise.id,
    }));
  };

  return (
    <SelectSearch
      options={selectExerciseOptions()}
      value={value}
      onChange={props.select}
      search
      filterOptions={fuzzySearch}
      placeholder="Search Exercise"
    />
  );
};

export default ExerciseSearch;
