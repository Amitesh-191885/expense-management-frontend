import { Route, Routes } from "react-router";

function AppRouter() {
  console.log("hhl")
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Wow !!</h1>
          </>
        }></Route>
    </Routes>
  );
}

export default AppRouter;
