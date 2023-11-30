import PropTypes from "prop-types";
import TodoContent from "./TodoContent";

const ListTodo = ({ todo, handleOpen }) => {
  return (
    <div className="grid grid-cols-1 gap-5 ">
      {todo.map((value) => {
        return (
          <TodoContent key={value.id} handleOpen={handleOpen} {...value} />
        );
      })}
    </div>
  );
};

ListTodo.propTypes = {
  todo: PropTypes.array.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default ListTodo;
