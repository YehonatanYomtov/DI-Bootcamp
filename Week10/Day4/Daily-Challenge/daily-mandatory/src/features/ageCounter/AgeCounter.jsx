import { useDispatch, useSelector } from "react-redux";

// Components
import ErrorDisplay from "../../components/ErrorDisplay";
import LoadingSpinner from "../../components/LoadingSpinner";

// Age Slice
import { ageDownAsync, ageUpAsync } from "./ageCounterSlice";

function AgeCounter() {
  const age = useSelector((state) => state.age?.age);
  const status = useSelector((state) => state.age?.status);
  const error = useSelector((state) => state.age?.error);

  const dispatch = useDispatch();

  return (
    <div className="age-counter-main-container">
      {status === "error" && error && <ErrorDisplay error={error} />}

      {status === "loading" && <LoadingSpinner />}

      {(status === "idle" || status === "success") && !error && (
        <div className="age-counter-sub-container">
          <button onClick={() => dispatch(ageDownAsync(1))}>-</button>
          <h1 className="age">{age}</h1>
          <button onClick={() => dispatch(ageUpAsync(1))}>+</button>
        </div>
      )}
    </div>
  );
}

export default AgeCounter;
