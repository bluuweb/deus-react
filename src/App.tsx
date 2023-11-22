import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </div>
  );
};
export default App;
