import { IoMdTime } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const DetailTask = ({ handleClose }) => {
  return (
    <>
      <div className="p-8 flex flex-col gap-y-5">
        <div className="flex items-center">
          <h1 className="text-2xl text-primary font-medium flex-1">
            Edit Detail Task
          </h1>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="grid gap-y-2 text-primary">
            <label htmlFor="title" className="text-xl font-normal">
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
            <label htmlFor="title" className="text-xl font-normal">
              Description
            </label>
            <textarea
              placeholder="Description"
              defaultValue="I have to join a meeting today at 10:00 A.M to brain storming"
              cols="15"
              rows="5"
              className="p-2 w-full border text-base font-light placeholder:text-base placeholder:text-primary focus:outline-primary"></textarea>
          </div>
        </div>

        <ul className="flex flex-col gap-y-3 text-primary">
          <li className="flex items-center gap-x-2">
            <IoCalendarOutline className="text-xl" />
            <label htmlFor="duedate" className="text-lg font-normal">
              Due Date
            </label>
            <input
              type="date"
              defaultValue="2020-08-22"
              className="text-lg font-light"
            />
          </li>

          <li className="flex items-center gap-x-2">
            <IoMdTime className="text-xl" />
            <label htmlFor="reminder" className="text-lg font-normal">
              Reminder at
            </label>
            <input
              type="time"
              defaultValue="08:40"
              className="text-lg font-light"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-3 p-8 justify-end">
        <button className="w-full bg-primary p-2 text-xl font-semibold text-logo rounded-md">
          Save
        </button>
        <button
          className="w-full bg-transparent border border-primary p-2 text-xl font-semibold text-primary rounded-md"
          onClick={handleClose}>
          Cancel
        </button>
      </div>
    </>
  );
};

DetailTask.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default DetailTask;
