import { connect } from "react-redux";
import { setSelectedDay } from "../redux/actions";

function DatePicker({ selectedDay, setSelectedDay }) {
  return (
    <div>
      <input
        type="date"
        value={selectedDay || ""}
        onChange={(e) => setSelectedDay(e.target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedDay: state.tasks.selectedDay,
});

const mapDispatchToProps = {
  setSelectedDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
