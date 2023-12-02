import { GoChecklist } from "react-icons/go";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col bg-primary text-white justify-center h-screen p-5 gap-5 w-full sm:basis-1/2 sm:p-16 ">
        <div className="flex items-center text-logo gap-2">
          <GoChecklist className="text-3xl" />
          <h1 className="text-3xl font-medium ">Todo List</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-medium">Create Your Account</h1>
          <p className="text-lg font-light">
            Welcome! Sign Up to create your Todo List <br />
            <Link to="/login" className="text-base font-light text-logo">
              Do you have an account ?
            </Link>
          </p>
        </div>
        <ul className="flex flex-col gap-5">
          <li className="flex gap-5">
            <div className="basis-1/2 flex flex-col gap-2">
              <label htmlFor="username">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-md bg-transparent border border-white text-base text-logo focus:outline-logo"
              />
            </div>
            <div className="basis-1/2 flex flex-col gap-2">
              <label htmlFor="username">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-md bg-transparent border border-white text-base text-logo focus:outline-logo"
              />
            </div>
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="p-3 rounded-md bg-transparent border border-white text-base text-logo focus:outline-logo"
            />
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="p-3 rounded-md bg-transparent border border-white text-base text-logo focus:outline-logo"
            />
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-md bg-transparent border border-white text-base text-logo focus:outline-logo"
            />
          </li>
        </ul>
        <button className="bg-logo bg-opacity-90 p-3 rounded-md text-xl font-medium text-primary transition-all duration-300 delay-75 hover:bg-opacity-100 hover:font-semibold ">
          Sign Up
        </button>
      </div>
      <div className="hidden bg-white basis-1/2 sm:flex">
        <div className="h-screen flex justify-center p-16">
          <img src="public/signup.svg" alt="register" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
