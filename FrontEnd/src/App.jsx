import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./page/Homepage";
import NewTodoPage from "./page/NewTodoPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Sidebar>
          <Routes>
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/newtodo" element={<NewTodoPage />} />
          </Routes>
        </Sidebar>
      </main>
    </BrowserRouter>
  );
}

export default App;
