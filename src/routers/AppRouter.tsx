import { Route, Routes } from "react-router";
import MainOutlet from "../outlets/MainOutlet";

function AppRouter() {
  console.log("hhl");
  return (
    <Routes>
      <Route path="/" element={<MainOutlet />}></Route>
    </Routes>
  );
}

export default AppRouter;
