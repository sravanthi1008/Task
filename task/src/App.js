import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SelectMenu from "./index";
import makeAnimated from "react-select/animated";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/selectbox" element={<SelectMenu />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
