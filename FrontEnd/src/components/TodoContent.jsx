import PropTypes from "prop-types";
import { showFormattedDate, showFormattedTime } from "../utils";
import { IoMdTime } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

const TodoContent = ({ title, reminderAt, category, handleOpen }) => {
  return (
    <div className="flex bg-white rounded-md p-5 shadow-md gap-x-5 items-center shadow-primary">
      <div className="flex flex-col gap-y-1">
        <button
          className="text-primary text-xl font-semibold text-left bg-transparent w-fit hover:underline"
          onClick={handleOpen}>
          {title}
        </button>

        <div className="grid items-center gap-x-2 text-sm sm:flex">
          <span className="flex items-center gap-x-1 font-light ">
            <IoMdTime />
            {showFormattedTime(reminderAt)}
          </span>

          <span className="hidden sm:flex">|</span>

          <span className="flex items-center gap-x-1 font-light">
            <IoCalendarOutline />
            {showFormattedDate(reminderAt)}
          </span>

          <span className="hidden sm:flex">|</span>

          <span className="order-first font-semibold text-logo sm:order-last">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

TodoContent.propTypes = {
  title: PropTypes.string.isRequired,
  reminderAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default TodoContent;
