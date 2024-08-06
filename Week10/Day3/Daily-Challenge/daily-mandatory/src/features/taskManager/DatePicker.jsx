import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSelectedDay } from "./tasksSlice";

function DatePicker() {
  const dayRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        className="w-175 py-1 px-2 border rounded shadow-sm"
        type="date"
        ref={dayRef}
        onChange={() => dispatch(setSelectedDay(dayRef.current.value))}
      />
    </div>
  );
}

export default DatePicker;
