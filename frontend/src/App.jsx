import RouteConfig from "./route/RouteConfig";
import { BrowserRouter } from "react-router";


function App() {
  return (
    <>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>

    </>
  );
}

export default App;
