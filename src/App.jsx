import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { A } from "./Pages/A";
import { B } from "./Pages/B";
import { C } from "./Pages/C";
import { D } from "./Pages/D";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/a" element={<A />}></Route>
          <Route path="/b" element={<B />}></Route>
          <Route path="/c" element={<C />}></Route>
          <Route path="/d" element={<D />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
