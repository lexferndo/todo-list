import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

const categories = [
  {
    id: 1,
    name: "Work",
  },
  {
    id: 2,
    name: "Study",
  },
  {
    id: 3,
    name: "Intern",
  },
];

const status = [
  {
    id: 1,
    name: "On Progress",
  },
  {
    id: 2,
    name: "Completed",
  },
  {
    id: 3,
    name: "Archived",
  },
];

const DetailTask = ({ handleClose }) => {
  return (
    <div className="grid gap-3 content-center h-screen px-5 sm:gap-7">
      <div className="flex items-center">
        <h1 className="text-2xl text-primary font-medium flex-1">
          Edit Detail Task
        </h1>
      </div>
      <div className="grid gap-y-3 sm:gap-y-5">
        <div className="grid gap-y-2 text-primary items-center">
          <label htmlFor="title" className="text-base font-medium">
            Category
          </label>
          <Dropdown drop={categories} />
        </div>
        <div className="grid gap-y-2 text-primary">
          <label htmlFor="title" className="text-base font-medium">
            Title
          </label>
          <input
            type="text"
            placeholder="Title"
            defaultValue="Meeting with Disha"
            className="border p-2 w-full text-base font-light placeholder:text-base placeholder:text-primary focus:outline-primary"
          />
        </div>
        <div className="grid gap-y-2 text-primary">
          <label htmlFor="title" className="text-base font-medium">
            Description
          </label>
          <textarea
            placeholder="Description"
            defaultValue="I have to join a meeting today at 10:00 A.M to brain storming"
            cols="15"
            rows="5"
            className="p-2 w-full border text-base font-light placeholder:text-base placeholder:text-primary focus:outline-primary"></textarea>
        </div>
        <div className="flex gap-x-2 text-primary items-center">
          <label htmlFor="title" className="text-base font-medium">
            Status
          </label>
          <Dropdown drop={status} />
        </div>

        <ul className="flex flex-col gap-y-3 text-primary">
          <li className="flex items-center gap-x-2">
            <label htmlFor="duedate" className="text-base font-medium">
              Due Date
            </label>
            <input
              type="date"
              defaultValue="2020-08-22"
              className="text-base font-light px-2 border"
            />
          </li>

          <li className="flex items-center gap-x-2">
            <label htmlFor="reminder" className="text-base font-medium">
              Reminder at
            </label>
            <input
              type="time"
              defaultValue="08:40"
              className="text-base font-light px-2 border"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="w-full bg-primary p-2 text-base font-semibold text-logo rounded-md">
          Save
        </button>
        <button
          className="w-full bg-transparent border border-primary p-2 text-base font-semibold text-primary rounded-md"
          onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

DetailTask.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default DetailTask;
