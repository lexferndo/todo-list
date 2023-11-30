import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./page/Homepage";
import NewTodoPage from "./page/NewTodoPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Sidebar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newtodo" element={<NewTodoPage />} />
          </Routes>
        </Sidebar>
      </main>
    </BrowserRouter>
  );
}

export default App;
