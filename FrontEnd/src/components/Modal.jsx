import { MdOutlineClose } from "react-icons/md";
import Dropdown from "./Dropdown";
import { useContext, useState } from "react";
import { DetailContext } from "../context/DetailContext";

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

const Modal = () => {
  const { openDetail } = useContext(DetailContext);
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClickClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          className={`bottom-5 px-6 py-3 rounded-full bg-primary text-4xl text-logo bg-opacity-90 border-none hover:bg-opacity-100 hover:font-medium ${
            openDetail || openModal ? "hidden" : "fixed"
          }`}
          onClick={handleClickOpen}>
          +
        </button>
      </div>
      <div
        className={`bg-primary bg-opacity-50 fixed top-0 left-0 w-full h-full justify-center p-5 ${
          openModal ? "flex" : "hidden"
        }`}>
        <div className="bg-white m-auto p-5 w-full rounded-md sm:w-3/5 lg:w-2/5">
          <div className="flex items-center border-b-2 border-primary pb-2">
            <h1 className="text-2xl text-primary font-medium flex-1">
              Create New Todo
            </h1>
            <MdOutlineClose
              className="text-3xl text-primary cursor-pointer"
              onClick={handleClickClose}
            />
          </div>
          <div className="grid py-5 gap-y-4 text-primary h-96 overflow-auto">
            <div className="grid items-center gap-y-2">
              <label className="text-base font font-medium">Category</label>
              <Dropdown drop={categories} />
            </div>
            <div className="grid gap-y-2 text-primary">
              <label htmlFor="title" className="text-base font-medium">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                className="border p-2 w-full text-base font-light placeholder:text-base placeholder:text-primary focus:outline-primary"
              />
            </div>
            <div className="grid gap-y-2 text-primary">
              <label htmlFor="description" className="text-base font-medium">
                Description
              </label>
              <textarea
                placeholder="Description"
                cols="15"
                rows="5"
                className="p-2 w-full border text-base font-light placeholder:text-base placeholder:text-primary focus:outline-primary"></textarea>
            </div>
            <div className="grid gap-y-2 text-primary ">
              <label htmlFor="title" className="text-base font-medium">
                Status
              </label>
              <Dropdown drop={status} />
            </div>
            <div className="flex gap-x-3">
              <div className="grid gap-y-2 text-primary ">
                <label htmlFor="duedate" className="text-base font-medium">
                  Due Date
                </label>
                <input
                  type="date"
                  className="text-base font-light p-1 border  w-fit"
                />
              </div>
              <div className="grid gap-y-2 text-primary ">
                <label htmlFor="reminder" className="text-base font-medium">
                  Reminder at
                </label>
                <input
                  type="time"
                  className="text-base font-light py-1 px-2 border w-fit"
                />
              </div>
            </div>
          </div>
          <button className="bg-primary w-full p-2 text-logo rounded-md font-medium text-lg">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
