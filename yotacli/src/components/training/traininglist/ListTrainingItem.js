import classes from "../traininglist/ListTrainingItem.module.css";
import TrainingList from "./TrainingList";

const ListTrainingItem = ({ currentPage, dataPerPage }) => {
  return (
    <div className={`table-responsive ${classes.table}`}>
      <table
        className="table table-bordered table-hover"
        style={{ fontSize: "small" }}
      >
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Name</th>
            <th>Description</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TrainingList currentPage={currentPage} dataPerPage={dataPerPage} />
        </tbody>
      </table>
    </div>
  );
};

export default ListTrainingItem;
