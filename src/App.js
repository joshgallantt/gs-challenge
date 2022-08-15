import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import ExerciseSearch from "./components/ExerciseSearch";
import ExerciseInfo from "./components/ExerciseInfo";
import GenderSelect from "./components/GenderSelect";
import Loading from "./components/Loading";

function App() {
  const EXERCISE_DATA_ENDPOINT =
    "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/";

  const [exerciseData, setExerciseData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(false);
  const [gender, setGender] = useState("male");

  const getExerciseData = () => {
    axios
      .get(EXERCISE_DATA_ENDPOINT)
      .then((response) => {
        console.log("response", response.data.exercises);
        setExerciseData(response.data.exercises);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  const handleSelectExercise = (selection) => {
    const selectedExerciseInfo = exerciseData.find(
      (element) => element.id === selection
    );
    setSelectedExercise(selectedExerciseInfo);
  };

  const handleSelectGender = (event) => {
    setGender(event.target.value);
  };

  useEffect(() => {
    getExerciseData();
  }, []);

  if (loaded) {
    return (
      <div className="App">
        <Header />
        <div className="search-container">
          <ExerciseSearch
            exercises={exerciseData}
            select={handleSelectExercise}
          />
          <GenderSelect gender={gender} select={handleSelectGender} />
        </div>
        {selectedExercise && (
          <ExerciseInfo selectedExercise={selectedExercise} gender={gender} />
        )}
      </div>
    );
  } else
    return (
      <div className="App">
        <Header />
        <Loading />
      </div>
    );
}

export default App;
