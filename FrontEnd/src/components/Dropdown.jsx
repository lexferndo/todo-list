import PropTypes from "prop-types";

const Dropdown = ({ drop }) => {
  return (
    <select
      name="category"
      id="dropdown"
      className="p-1 border w-32 font-light text-base focus:outline-primary">
      {drop.map((value) => {
        return (
          <option key={value.id} value={value.name}>
            {value.name}
          </option>
        );
      })}
    </select>
  );
};

Dropdown.propTypes = {
  drop: PropTypes.array.isRequired,
};

export default Dropdown;
