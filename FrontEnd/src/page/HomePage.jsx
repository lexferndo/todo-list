import { useContext, useEffect, useState } from "react";
import ListTodo from "../components/ListTodo";
import { getAllTodoList } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { DetailContext } from "../context/DetailContext";

const HomePage = () => {
  const [todoList, setTodoList] = useState([]);
  const { openDetail, setOpenDetail } = useContext(DetailContext);

  useEffect(() => {
    const fetchData = async () => {
      const todo = await getAllTodoList();

      setTodoList(todo);
    };
    fetchData();
  }, []);

  const handleClickOpenDetail = () => {
    setOpenDetail(true);
  };

  return (
    <div className="flex">
      <div className="flex-col justify-center p-8 w-full transition-all duration-1000 delay-1000">
        <section className="container mx-auto pb-5">
          <h1 className="text-3xl font-semibold text-primary">Today</h1>
          <div className="grid justify-between items-center gap-y-3 sm:flex">
            <h3 className="text-xl font-normal">
              {showFormattedDate(new Date().toLocaleDateString())}
            </h3>
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-md w-full sm:w-1/4"
            />
          </div>
        </section>

        <section className="container mx-auto">
          <ListTodo todo={todoList} handleOpen={handleClickOpenDetail} />
          <div className="flex justify-end">
            <button
              className={`bottom-5 px-6 py-3 rounded-full bg-primary text-4xl text-logo bg-opacity-90 border-none hover:bg-opacity-100 hover:font-medium ${
                openDetail ? "hidden" : "fixed"
              }`}>
              +
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

// ${
//   openDetail && window.innerWidth <= 1000 ? "hidden" : "flex"
// }
