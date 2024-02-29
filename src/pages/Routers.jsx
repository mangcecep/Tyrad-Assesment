import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
]);

export default Routers;