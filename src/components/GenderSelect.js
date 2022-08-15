import React from "react";
import "./css/GenderSelect.css";

const GenderSelect = (props) => {
  return (
    <div className="gender-select">
      <button
        value="male"
        onClick={props.select}
        className={props.gender === "male" ? "selected" : "not-selected"}
      >
        Male
      </button>
      <button
        value="female"
        onClick={props.select}
        className={props.gender === "female" ? "selected" : "not-selected"}
      >
        Female
      </button>
    </div>
  );
};

export default GenderSelect;
