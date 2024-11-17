import { Outlet } from "react-router-dom";

function App() {
  console.log("콘솔");

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
